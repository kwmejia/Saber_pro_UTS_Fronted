import { useEffect, useState } from "react";
import clientHTTP from "../../api/configAxios";
import { showAlertError } from "../../common";

export const useGetStudent = (id) => {
  const [infoStudent, setInfoStudent] = useState({});

  const getStudent = async (idStudent) => {
    try {
      const { data } = await clientHTTP.get(`/students/${idStudent}`);
      setInfoStudent(data);
    } catch (error) {
      showAlertError();
    }
  }

  useEffect(() => {
    getStudent(id);
  }, [])


  return {
    getStudent,
    infoStudent
  }
}
