import { Link } from "react-router-dom"

const Login = ()=>{
    return(
        <div className="register" >
        <div className="wrapper" id="menu2">
            <div className="login" >
                <form id="loginForm">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Nombre de usuario" 
                        required id="user" />
                    </div>
                    <div className="input-box">
                        <input type="password" 
                        placeholder="Contraseña" 
                        required id="pass"/>
                    </div>
                    
                    <div className="ChangePass">
                        <a href="#">Olvidaste tu contraseña?</a>
                    </div>
                    <button type="submit" className="btnLogin">Login</button>
                    
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