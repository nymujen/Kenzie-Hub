import { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechsContext = createContext({})

export function TechsProvider({children}){
    const [modalCreate, setModalCreate] = useState(false)

    const [modalUpdate, setModalUpdate] = useState(false)

    function switchModalCreate(){
        setModalCreate(!modalCreate)
    }

    function switchModalUpdate(){
        setModalUpdate(!modalUpdate)
    }

    async function createTech(data){
        const token = window.localStorage.getItem("@TOKEN")
        if(token){
            try {
                const request = await api.post(`/users/techs`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })     
                if(request.status === 201){
                    toast("Tecnologia criada!",{
                        theme: "dark", 
                        type: "success",
                        autoClose: 3000,
                        position: "bottom-right"  
                        } 
                    )
                }
            } catch (error) {
                toast("Não foi possível criar a tecnologia",{
                    theme: "dark",
                    type: "error",
                    autoClose: 3000,
                    position: "bottom-right" 
                })  
            }   
        }else{
            console.log("Voce não tem acesso a rota")
        }   
    }

    async function updateTech(data, id){
        const token = window.localStorage.getItem("@TOKEN")
        if(token){
            try {
                await api.put(`/users/techs/${id}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                toast("Tecnologia atualizada!",{
                    theme: "dark", 
                    type: "success",
                    autoClose: 3000,
                    position: "bottom-right"  
                 }      
             )
            } catch (error) {
                toast("Não foi possível atualizar a tecnologia",{
                    theme: "dark",
                    type: "error",
                    autoClose: 3000,
                    position: "bottom-right" 
                })
            }   
        }else{
            console.log("Voce não tem acesso a rota")
        }   
    }

    async function deleteTech(id){
        const token = window.localStorage.getItem("@TOKEN")
        if(token){
            try {
                await api.delete(`/users/techs/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                toast("Tecnologia deletada!",{
                    theme: "dark", 
                    type: "success",
                    autoClose: 3000,
                    position: "bottom-right"  
                 }      
             )
            } catch (error) {
                toast("Não foi possível deletar a tecnologia",{
                    theme: "dark",
                    type: "error",
                    autoClose: 3000,
                    position: "bottom-right" 
                })
            }   
        }else{
            console.log("Voce não tem acesso a rota")
        }
    }
 
    return (
        <TechsContext.Provider value={{createTech, updateTech, deleteTech, modalCreate, modalUpdate, switchModalCreate, switchModalUpdate}}>
            {children}
        </TechsContext.Provider>
    )
}