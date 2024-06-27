const NavBar =()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">STICKY GAMES <img src="src/img/logo.png" width={40} height={35}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Iniciar sesion</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tus juegos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Biblioteca de juegos</a></li>
            <li><a className="dropdown-item" href="#">Publicar Juegos</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Acerca de</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar juego" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
    )
}
export default NavBar