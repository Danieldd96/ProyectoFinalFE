import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";
import {darDatos} from "../hooks/Post";

const Register = ()=>{
    const navegar = useNavigate('')
    const [user,setUser] = useState(""); 
    const [email,setEmail] = useState(""); 
    const [pass,setPass] = useState(""); 
    
    let apiUrl="http://localhost:3001/users/"
    const Guardar = async()=>{ 
        if (user.trim()===""&&email.trim()===""&&pass.trim()==="") { 
            alert("Inserte texto por favor")
          }else{
            console.log("Entrando");
            let usuarios={
                user:user,
                email:email,
                pass:pass,
                state:false
            }
            await darDatos(usuarios,apiUrl)
            setTimeout(() => {
                navegar('/login')
                
            }, 1000);
          }
        }
    return(
        <div className="register" >
            <div className="wrapper">
            <form id="registerForm">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" id="name" placeholder="Usuario" 
                    required onChange={(e)=>setUser(e.target.value)}/>
                    
                </div>
                <div className="input-box">
                    <input type="email" id="email" placeholder="Correo Electronico" 
                    required onChange={(e)=>setEmail(e.target.value)}/>
                    
                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder="Contraseña" 
                    required id="password" onChange={(e)=>setPass(e.target.value)}/>
                </div>
                

                <button type="button" onClick={Guardar} className="btn" >Register</button>
                
                <div className="register-link">
                    <p>Ya tienes una cuenta? <Link to="/login" className="registerBtn">Login</Link></p>
                </div>
            </form>
    </div>
    </div>
    )
}
export default Register