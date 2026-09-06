import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="brand">
          <div className="brand-icon">
            LP
          </div>

          <div className="brand-text">
            <h1>
              LINK POINT
            </h1>

            <span>
              SOLUCIONES EMPRESARIALES
            </span>
          </div>
        </div>


        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#empresa">Empresa</a>
          <a href="#contacto">Contacto</a>
        </nav>


        <button className="nav-button">
          Solicitar servicio
        </button>


      </div>
    </header>
  );
};

export default Navbar;