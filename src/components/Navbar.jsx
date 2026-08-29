function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CorpPortal</div>
      <ul className="nav-links">
        <li>
          <span className="material-icons">home</span> Inicio
        </li>
        <li className="active">
          <span className="material-icons">shopping_bag</span> Productos
        </li>
        <li>
          <span className="material-icons">design_services</span> Servicios
        </li>
        <li>
          <span className="material-icons">info</span> Información
        </li>
      </ul>
      <div className="nav-icons">
        <span className="material-icons">search</span>
        <span className="material-icons">notifications</span>
        <span className="material-icons">settings</span>
      </div>
    </nav>
  );
}

export default Navbar;
