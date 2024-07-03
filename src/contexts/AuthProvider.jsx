import { createContext,useState } from "react";
export const AuthContext = createContext()
const AuthProvider=({children})=>{
    const [auth,setAuth]=useState(false)
    const Login = ()=>setAuth(true)
    const Logout = ()=>setAuth(false)
return(
    <AuthContext.Provider value={{auth,Login,Logout}}>
        {children}
    </AuthContext.Provider>
)

}
export default AuthProvider