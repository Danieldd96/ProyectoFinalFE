import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Rutas_Privadas = ({route})=>{
    const {auth}=useContext(AuthContext);
    return auth ? route : <Navigate to="/login"/>;
};
export default Rutas_Privadas;