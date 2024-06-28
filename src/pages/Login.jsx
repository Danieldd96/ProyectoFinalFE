import { useNavigate } from "react-router-dom"
import {  useState } from "react"
import { Link } from "react-router-dom"
import Get from "../hooks/Get"

const Login = ()=>{
    const navegar = useNavigate();
    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");
  
  
    const Guardar = async () => {
      try {
        const usuarios = await Get();
        
        usuarios.forEach((usuario) => {
          const emailRegistrado = usuario.email;
          const passRegistrado = usuario.pass;
          const idRegistrado = usuario.id;
          const userName = usuario.user
          console.log(emailRegistrado);
          console.log(passRegistrado);
          console.log(idRegistrado);
          if (email === emailRegistrado && clave === passRegistrado) {
            console.log("Usuario encontrado");
            localStorage.setItem("email", emailRegistrado);
            localStorage.setItem("idUsuario", idRegistrado);
            localStorage.setItem("usuario", userName);
            navegar("/");
          }
        });
    
        alert("Email o contraseña incorrectos");
    
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
                    </div>
                    <div className="input-box">
                        <input type="password" 
                        placeholder="Contraseña" 
                        required id="pass" onChange={(e) => setClave(e.target.value)} />
                    </div>
                    
                    <div className="ChangePass">
                        <a href="#">Olvidaste tu contraseña?</a>
                    </div>
                    <button type="button" onClick={Guardar} className="btn">Login</button>
                    
                    <div className="register-link">
                        <p>No tienes una cuenta? <Link to="/registro" className="registerBtn">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </div>      
    )
}
export default Login