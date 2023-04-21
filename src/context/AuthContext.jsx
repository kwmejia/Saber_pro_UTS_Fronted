import { createContext, useEffect, useState } from "react";
import { useGetAllStudents } from "../services/students/useGetAllStudents";
import { showAlertError, showAlertSuccess } from "../common";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(undefined);
  const [isLoged, setIsLoged] = useState(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  const navigation = useNavigate();

  useEffect(() => {
    checkToken();
  }, [])

  const checkToken = () => {
    const userLocal = JSON.parse(localStorage.getItem('user'));
    if (!userLocal) {
      setIsLoged(false)
      return;
    }

    setuser(userLocal);
    if (userLocal.role == "ADMIN") {
      navigation('/dashboard')
      return;
    }
    navigation('/')
  }

  const login = async (userValue, password, listStudents, listCoordinators) => {
    setIsLoadingLogin(true);
    const checkUser = listStudents.filter(student =>
      student.nit == userValue && student.password == password);
    if (checkUser.length > 0) {
      setuser({ ...checkUser[0], role: "USER" })
      showAlertSuccess("Logueado Correctamente");
      localStorage.setItem('user', JSON.stringify({ ...checkUser[0], role: "USER" }));
      setIsLoged(true);
      navigation('/')
    } else {
      const checkCoordinator = listCoordinators.filter(coordinator =>
        coordinator.user = userValue && coordinator.password == password)

      if (checkCoordinator.length > 0) {
        setuser({ ...checkCoordinator[0], role: "ADMIN" });
        showAlertSuccess("Logueado Correctamente");
        setIsLoged(true);
        localStorage.setItem('user', JSON.stringify({ ...checkCoordinator[0], role: "ADMIN" }));
        navigation('/dashboard');
      } else {
        showAlertError("Credenciales incorrectas.")
        setIsLoged(false);
      }
    }
    setIsLoadingLogin(false);
  }

  const logOut = () => {
    localStorage.removeItem('user');
    setIsLoged(false);
    navigation('/login')
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoged,
      login,
      logOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}