import { createContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export function UserProvider({children}){
    const navigate = useNavigate()

    async function onSubmitLogin(data){
        try {
            const request = await api.post("/sessions", data)
            if(request.status === 200){
                const { token, user } = request.data
                window.localStorage.setItem("@TOKEN", token)
                window.localStorage.setItem("@USERID", user.id)
                toast("Login efetuado", {
                    theme: "dark",
                    type: "success",
                    autoClose: 3000,
                    position: "bottom-right"
                })
                setTimeout(navigate("/dashboard"), 3000)     
            }
        } catch (error) {
            toast("Erro ao efetuar o login", {
                    theme: "dark",
                    type: "error",
                    autoClose: 3000,
                    position: "bottom-right",
            })
        }
    }

    async function onSubmitRegister(data){
        try {
            const request = await api.post("/users", data)
            if(request.status === 201){
                toast("Conta criada",{
                       theme: "dark", 
                       type: "success",
                       autoClose: 3000,
                       position: "bottom-right"  
                    }      
                )
               setTimeout(navigate("/"), 3000)                 
            }      
        } catch (error) {
           toast("Não foi possível criar a conta",{
                theme: "dark",
                type: "error",
                autoClose: 3000,
                position: "bottom-right" 
            }) 
        }        
    }
    
    function unlog(){
        window.localStorage.removeItem("@TOKEN")
        window.localStorage.removeItem("@USERID")
        navigate("/")
        setUser({})
    }

    return (
        <UserContext.Provider value={{onSubmitLogin, onSubmitRegister, unlog}}>
            {children}
        </UserContext.Provider>
    )
}   