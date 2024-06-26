const Login = ()=>{
    return(
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
                <p>No tienes una cuenta? <a href="#" className="registerBtn">Register</a></p>
            </div>
        </form>
       </div>
    </div>
    )
}
export default Login