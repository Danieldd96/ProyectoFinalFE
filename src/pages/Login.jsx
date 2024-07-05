import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Get } from "../hooks/Get"
import { AuthContext } from "../contexts/AuthProvider"

const Login = ()=>{
    const navegar = useNavigate();                 ///navegar sera el que se utilizara para pasar a otra pagina al completar una funcion
    const [email, setEmail] = useState("");        ///Con este UseState obtendre el contenido del input en el cual se obtendra el email
    const [clave, setClave] = useState("");        ///Con este UseState obtendre el contenido del input en el cual se obtendra el la contraseña
    const {login} = useContext(AuthContext);       ///Con este UseContext verificare cuales rutas seran privadas

    let apiUrl="http://localhost:3001/users/"      ///Api que contendra los datos de los usuarios que se hayan registrado previamente
    const Guardar = async () => {
      try {
        const usuarios = await Get(apiUrl);        ///usuarios obtendra los usuarios guardados de en la api
        
        usuarios.forEach((usuario) => {               ///Este forEach recorrera los datos del api
          const emailRegistrado = usuario.email;      ///Este const contendra el email de la api      
          const passRegistrado = usuario.pass;        ///Este const contendra la contraseña de la api   
          const idRegistrado = usuario.id;            ///Este const contendra el id del usuario de la api   
          const userName = usuario.user;              ///Este const contendra el usuario de la api   
          console.log(emailRegistrado);
          console.log(passRegistrado);
          console.log(idRegistrado);
          if (email === emailRegistrado && clave === passRegistrado) {  ///Este if vera si el email y clave previamente guardado en el useState es igual al guardado en la api
            console.log("Usuario encontrado");
            localStorage.setItem("email", emailRegistrado);      ///Con local storage guardaremos el email de la api en "email" del local storge para usarlo en otras funciones
            localStorage.setItem("idUsuario", idRegistrado);     ///Con local storage guardaremos el Id de la api en "idUsuario" del local storge para usarlo en otras funciones
            localStorage.setItem("usuario", userName);           ///Con local storage guardaremos el Nombre de usuario de la api en "usuario" del local storge para usarlo en otras funciones
            setTimeout(() => {      ///Este setTimeout hara que la funcion pasado un segundo use el UseNavigate para trasladarnos a la pagina principal y llamaremos a la funcion login
              navegar("/");
              login();
            }, 1000);
          }else{
            alert("Email o contraseña incorrectos");
          }
        });
      } catch (error) {
        console.log(error);
        alert("Error al iniciar sesión");
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