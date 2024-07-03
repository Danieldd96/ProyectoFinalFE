import { useState } from "react"
import { Link } from "react-router-dom"
import { Flex, Switch,Button } from "@radix-ui/themes"
import { useNavigate } from "react-router-dom"


const NavBar =({funcionColor})=>{
  
  const [sesion,setSesion]=useState(false)
  const mail =localStorage.getItem("email")
  const navegar=useNavigate()
  
  const limpiarSesion = ()=>{
    setSesion(true)
    localStorage.clear()
  }
  const publicar=()=>{
    if (mail) {
      navegar('/publicar')
    } else {
      navegar('/login')
    }
  }
  const carrito=()=>{
    if (mail) {
      navegar('/carrito')
    } else {
      navegar('/login')
    }
    
  }
  
  return(
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/" style={{color:"white"}}>STICKY GAMES <img src="src/img/logo.png" width={40} height={35}/></Link>
    <button style={{backgroundColor:"white"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login" href="#" style={{color:"white"}}>Iniciar Sesion</Link>
        </li>
        <li className="nav-item">
          {sesion?undefined:<Link className="nav-link" to="/perfil" style={{color:"white"}}>{mail}</Link>}
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Tus juegos
          </a>
          <ul className="dropdown-menu" >
            <li><a className="dropdown-item" href="#" >Biblioteca de juegos</a></li>
            <li><a className="dropdown-item" href="#" onClick={publicar}>Publicar Juegos</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/contact">Acerca de</Link></li>
            <li><a className="dropdown-item" href="/" onClick={limpiarSesion}>Cerrar sesion</a></li>
          </ul>
        </li>
      </ul>
        <Button onClick={carrito}>Carrito</Button>
        
      <Flex>
      <Switch variant="classicsoft" color="cyan" onClick={funcionColor} />
      </Flex>
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