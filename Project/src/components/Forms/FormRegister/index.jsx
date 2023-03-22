import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { Buttons, FormStyle, Inputs, SelectModule } from './style.js'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext.jsx'

const schema = yup.object({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Deve ser um email válido").required("Email obrigátorio"),
    password: yup.string().min(8, "deve possuir ao menos 8 caracteres"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
}).required()

export function FormRegister(){
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const { onSubmitRegister } = useContext(UserContext)

    function submit(data, event){
        event.preventDefault()
        onSubmitRegister(data)
        reset()
    }

    return(
        <FormStyle onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor=""></label>
                <Inputs type="text" placeholder="Seu nome..." {...register("name")} />
                {errors.name?.message}
            </div>               
            <div>
                <label htmlFor=""></label>
                <Inputs type="text" placeholder="Seu e-mail..." {...register("email")} />
                {errors.email?.message}
            </div>                
            <div>
                <label htmlFor=""></label>
                <Inputs type="password" placeholder="Sua senha..." {...register("password")} />
                {errors.password?.message}
            </div>                              
            <div>
                <label htmlFor=""></label>
                <Inputs type="text" placeholder="Sua bio..." {...register("bio")} />
                {errors.bio?.message}
            </div>
            <div>
                <label htmlFor=""></label>
                <Inputs type="text" placeholder="Seu contato..." {...register("contact")} />
                {errors.contact?.message}
            </div>
            <div>
                <SelectModule {...register("course_module")} >
                    <option value="Primeiro módulo">Primeiro módulo</option>
                    <option value="Segundo módulo">Segundo módulo</option>
                    <option value="Terceiro módulo">Terceiro módulo</option>
                    <option value="Quarto módulo">Quarto módulo</option>
                    <option value="Quinto módulo">Quinto módulo</option>
                    <option value="Sexto módulo">Sexto módulo</option>
                </SelectModule>
                {errors.course_module?.message}
            </div>     
            <Buttons type="submit" >Cadastrar</Buttons>
        </FormStyle>
    )
}