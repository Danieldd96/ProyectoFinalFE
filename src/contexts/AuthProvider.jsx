import { createContext,useEffect,useState } from "react";
export const AuthContext = createContext()
const AuthProvider=({children})=>{
    const [auth,setAuth]=useState(false)
    const login = ()=>setAuth(true)
    const Logout = ()=>setAuth(false)
    
    
return(
    <AuthContext.Provider value={{auth,login,Logout}}>
        {children}
    </AuthContext.Provider>
)

}
export default AuthProvider