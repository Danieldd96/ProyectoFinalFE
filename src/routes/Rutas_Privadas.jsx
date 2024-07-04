import { useContext,useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Rutas_Privadas = ({route})=>{
    const {auth,login}=useContext(AuthContext);
    useEffect(()=>{

        if (localStorage.getItem("idUsuario")) {
            login()
        }
    },[])
    return auth ? route : <Navigate to="/login"/>;
    
};
export default Rutas_Privadas;