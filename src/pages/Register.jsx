import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { darDatos } from "../hooks/Post";

const Register = ()=>{
    const navegar = useNavigate('')   ///Este navegar me permitira trasladarme a otra pagina
    ///Estos estados se utilizaran para contener los valores de sus respectivos inputs
    const [user,setUser] = useState(""); 
    const [email,setEmail] = useState(""); 
    const [pass,setPass] = useState(""); 
    ///Esta url es el api en el cual guardaremos los usuarios
    let apiUrl="http://localhost:3001/users/"
    const Guardar = async()=>{                ///Esta funcion Guardar sera la que mandara el objetos al metodo Post
        ///Este if verificara si los estados contienen vacios y si los contiene manda un alert que pedira que se coloque texto
        if (user.trim()===""&&email.trim()===""&&pass.trim()==="") {
            alert("Inserte texto por favor")
          }else{                         ///Si no esta vacio se mandara el objeto let usuarios que tendra los estados especificos
            console.log("Entrando");
            let usuarios={
                user:user,
                email:email,
                pass:pass,
                state:false
            }
            await darDatos(usuarios,apiUrl)    ///aqui se mandara el objeto al metodo post como parametro junto con el url de la api
            setTimeout(() => {      ///Y se usara un setTimeout de un segundo que con el navegar me llevara a la pagina de /login
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
                    {/* Este input guarda el estado cada vez que cambie */}
                    <input type="text" id="name" placeholder="Usuario" 
                    required onChange={(e)=>setUser(e.target.value)}/>
                </div>
                <div className="input-box">
                    {/* Este input guarda el estado cada vez que cambie */}
                    <input type="email" id="email" placeholder="Correo Electronico" 
                    required onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input-box">
                    {/* Este input guarda el estado cada vez que cambie */}
                    <input type="password" 
                    placeholder="Contraseña" 
                    required id="password" onChange={(e)=>setPass(e.target.value)}/>
                </div>
                {/* Este boton llamara a la funcion guardar que mandara el objeto con los estados de los inputs en el api 
                con le metodo post */}
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