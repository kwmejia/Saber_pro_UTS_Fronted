import { useContext } from 'react';
import './sidebar.scss';
import { AuthContext } from '../../../../../context/AuthContext';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  return (
    <div className="cont-sidebar">
      <img
        src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
        alt="avatar"
        className="mx-auto rounded-circle"
        width={130}
        height={130}
      />

      <h3 className='text-white'>{user.name}</h3>
      <h5 className="text-white">Coordinador</h5>


      <nav className="mt-3 d-flex flex-column w-100">
        <div className="cont-link">
          <Link to="/dashboard">
            Listado de estudiantes
          </Link>
        </div>
        <div className="cont-link">
          <Link to="form-student">
            Agregar estudiante
          </Link>
        </div>

        <button
          className="btn-log-out"
          onClick={logOut}
        >
          Cerrar Sesión
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </nav>
    </div>
  )
}
