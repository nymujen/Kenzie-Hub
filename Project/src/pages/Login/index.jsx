import { useNavigate } from "react-router-dom"
import { Buttons, Container, Content, FormContainer, HeaderLogin } from './style.js'
import { FormLogin } from "../../components/Forms/FormLogin/index.jsx"
import { useEffect } from "react"

export function Login(){
    const navigate = useNavigate()

    function switchPage(){
        navigate("/register")
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
                <HeaderLogin>
                    <h2>Kenzie Hub</h2>
                </HeaderLogin>
                <FormContainer>
                    <FormLogin />
                    <small>Ainda não possui uma conta?</small>
                    <Buttons onClick={switchPage}>Cadastre-se</Buttons>
                </FormContainer>
            </Content>
        </Container>
        
        
    )
}