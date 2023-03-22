import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { BackButton, Container, Content, FormContainer, HeaderRegister, Small } from "./style"
import { FormRegister } from "../../components/Forms/FormRegister"

export function Register(){
    const navigate = useNavigate()
    
    function backPage(){
        navigate(-1)
    }

    useEffect(() => {
        function autoLogin (){
            const token = window.localStorage.getItem("@TOKEN")
            if(token){
                navigate("/dashboard")
            }
        }
        autoLogin()
    }, [])

    return (
        <Container>
            <Content>
                <HeaderRegister>
                    <h2>Kenzie Hub</h2>
                    <BackButton onClick={backPage} >Voltar</BackButton>
                </HeaderRegister>
                <FormContainer>
                    <h2>Crie sua conta</h2>
                    <Small>Rapido e grátis, vamos nessa</Small>
                    <FormRegister />
                </FormContainer>
            </Content>  
        </Container>
        
        
    )
}