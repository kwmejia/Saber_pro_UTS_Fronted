import React, { useContext, useState } from 'react'
import './login.scss'
import { AuthContext } from '../../../context/AuthContext'
import { showAlertError, showAlertErrorToast } from '../../../common';
import { useGetAllStudents } from '../../../services/students/useGetAllStudents';
import { useGetAllCoordinators } from '../../../services/admin/useGetAllCoordinators';


const Login = () => {

  const [valueUsername, setValueUsername] = useState('');
  const [valuePassowrd, setValuePassowrd] = useState('');
  const { login } = useContext(AuthContext);

  const { listStudents, isLoadingGetAllStudents } = useGetAllStudents();
  const { listCoordinators, isLoadingGetAllCoordinators } = useGetAllCoordinators();

  const onSubmitLogin = () => {
    if ([valuePassowrd, valueUsername].includes('')) {
      showAlertErrorToast("Todos lo campos son obligatorios.")
      return;
    }

    login(
      valueUsername,
      valuePassowrd,
      listStudents,
      listCoordinators
    );
  }

  return (
    <div className="container-fluid cont-login m-0">
      <div className="row h-100 w-100">
        <div className="col-12 col-lg-7 m-0 p-0">
          <div id="carouselExampleAutoplaying" className="carousel slide h-100" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.uts.edu.co/sitio/wp-content/uploads/2022/11/fachada.jpg" alt="" className="h-100 w-100" />
              </div>
              <div className="carousel-item">
                <img src="https://www.uts.edu.co/sitio/wp-content/uploads/2021/05/CONSEJO-NAL.png" alt="" className="h-100 w-100" />
              </div>
              <div className="carousel-item">
                <img src="https://www.uts.edu.co/sitio/wp-content/uploads/2021/02/Fachada-2.jpg" alt="" className="h-100 w-100" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-5 cont-form">
          <section className="w-100 p-5 d-flex flex-column aling-items-center">
            <img src="https://www.elempleo.com/co/sitio-empresarial/CompanySites/unidades-tecnologicas-santander/resources/images/logo-social.jpg" alt="logo" className="img-fluid my-4 mx-auto" width={250} />
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control w-100"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setValueUsername(e.target.value)}
              />
              <label>Nit</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setValuePassowrd(e.target.value)}
              />
              <label>Contraseña</label>
            </div>

            <button
              className="button-green mt-4"
              onClick={onSubmitLogin}
            >
              {isLoadingGetAllStudents && isLoadingGetAllCoordinators ?
                <div className="spinner-border text-light" role="status">
                </div>
                : <span>Ingresar</span>
              }
            </button>
          </section>
        </div>
      </div>
    </div >
  )
}

export default Login;