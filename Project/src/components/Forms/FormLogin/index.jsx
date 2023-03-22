import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Buttons, FormStyle, Inputs } from "./style.js"
import { useContext } from "react"
import { UserContext } from "../../../contexts/UserContext.jsx"

const schema = yup.object({
    email: yup.string().required("Campo obrigatório").email("Deve ser um email válido"),
    password: yup.string().required("Campo obtigatório")
}).required()

export function FormLogin(){
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const { onSubmitLogin } = useContext(UserContext)

    function submit(data, event){
        event.preventDefault()
        onSubmitLogin(data)
    }

    return(
        <FormStyle onSubmit={handleSubmit(submit)}>
            <div>
                <Inputs type="text" placeholder="Seu e-mail..." {...register("email")} />
                {errors.email?.message}
            </div>      
            <div>
                <Inputs type="password" placeholder="Sua senha..." {...register("password")} />
                {errors.password?.message}
            </div>             
            <Buttons type="submit" >Entrar</Buttons>
        </FormStyle>
    )
}