import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Get } from "../hooks/Get"
import { AuthContext } from "../contexts/AuthProvider"

const Login = ()=>{
    const navegar = useNavigate();                 ///navegar sera el que se utilizara para pasar a otra pagina al completar una funcion
    const [email, setEmail] = useState("");        ///Con este UseState obtendre el contenido del input en el cual se obtendra el email
    const [clave, setClave] = useState("");        ///Con este UseState obtendre el contenido del input en el cual se obtendra el la contraseña
    const {login} = useContext(AuthContext);       ///Con este UseContext verificare cuales rutas seran privadas
    const [datos,setDatos]= useState("")
    let apiUrl="http://localhost:3001/users/"      ///Api que contendra los datos de los usuarios que se hayan registrado previamente
    useEffect(()=>{
      obtener()
    },[])
    async function obtener() {
      const data= await Get(apiUrl)
       setDatos(data)
    }
    const Guardar = async () => {
       const user=datos.find((user)=>user.email==email)
       console.log("Usuario encontrado",user)
       if (user.pass==clave) {
        localStorage.setItem("email",user.email)
        localStorage.setItem("idUsuario",user.id)
        localStorage.setItem("usuario",user.user)
        navegar('/')
        login()
       }else{
        alert("usuario o contraseña es incorrecto")
        obtener()
       }
       
    };
    return(
        <div className="register" >
          <div className="wrapper" id="menu2">
              <div className="login" >
                  <form id="loginForm">
                      <h1>Login</h1>
                      <div className="input-box">
                        <input type="text" placeholder="Correo Electronico" 
                        required id="email" onChange={(e) => setEmail(e.target.value)}/>      
                        {/*Este input al hacer un cambio hara un setEmail obteniendo el valor del mismo*/}
                      </div>
                      <div className="input-box">
                        <input type="password" 
                        placeholder="Contraseña" 
                        required id="pass" onChange={(e) => setClave(e.target.value)} />
                        {/*Este input al hacer un cambio hara un setEmail obteniendo el valor del mismo*/}
                      </div>
                      <div className="ChangePass">
                        <a href="#">Olvidaste tu contraseña?</a>
                      </div>
                      <button type="button" onClick={Guardar} className="btn">Login</button>
                      {/*Este Boton al usarse llamara al funcion guardar*/}
                      <div className="register-link">
                        <p>No tienes una cuenta? <Link to="/registro" className="registerBtn">Register</Link></p> {/*Este Link me llevara a la pagina de registro*/}
                      </div>
                  </form>
              </div>
          </div>
        </div>      
    )
}
export default Login