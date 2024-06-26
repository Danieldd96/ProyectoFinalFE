const Register = ()=>{
    return(
        <div className="register hidden" >
            <form id="registerForm">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" id="name" placeholder="Usuario" 
                    required/>
                    
                </div>
                <div className="input-box">
                    <input type="email" id="email" placeholder="Correo Electronico" 
                    required/>
                    
                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder="Contraseña" 
                    required id="password" />
                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder="Confirma tu contraseña" 
                    required id="password2" />
                </div>

                <button type="submit" className="btn" >Register</button>
                
                <div className="register-link">
                    <p>Ya tienes una cuenta? <a href="#" className="registerBtn">Login</a></p>
                </div>
            </form>
    </div>
    )
}
export default Register