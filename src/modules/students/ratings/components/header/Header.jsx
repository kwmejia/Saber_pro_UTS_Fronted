import './header.scss'

export const Header = ({ logOut }) => {
  return (
    <header className="container-fluid cont-header">
      <p className="pt-3">
        <i class="fas fa-user-graduate"></i>
        Kevin Wifred Mejía Torres
      </p>
      <button
        className="btn-log-out"
        onClick={logOut}
      >
        Cerrar Sesión
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </header>
  )
}
