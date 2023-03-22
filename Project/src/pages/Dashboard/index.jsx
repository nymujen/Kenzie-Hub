import { useContext, useEffect, useState } from "react"
import { AddTechBtn, AddTechSection, Container, HeaderDashboard, LogoutButton, SectionNameAndModule, Small, TechListContainer } from "./style"
import { UserContext } from "../../contexts/UserContext"
import { TechsCard } from "../../components/Techs"
import { CreateTechModal } from "../../components/Modal/ModalCreate"
import { TechsContext } from "../../contexts/TechsContext"
import { api } from "../../services/api"

export function Dashboard(){
    const {  unlog } = useContext(UserContext) 
    const { modalCreate, switchModalCreate } = useContext(TechsContext)
    const [user, setUser] = useState({})
    const [techs, setTechs] = useState([])

    useEffect(() => {
        async function getUserInfo(){
            const token = window.localStorage.getItem("@TOKEN")
            if(token){
                const request = await api.get(`profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(request.data)
                setTechs(request.data.techs)  
            }        
        }
        getUserInfo()
    }, [])
    return (
        <Container>
            <HeaderDashboard>
                <h2>Kenzie Hub</h2>
                <LogoutButton onClick={unlog} >Sair</LogoutButton>
            </HeaderDashboard>
            <SectionNameAndModule>
                <h3>Olá {user.name}</h3>
                <Small>{user.course_module}</Small>
            </SectionNameAndModule>
            <section>
                <AddTechSection>
                    <h2>Tecnologias</h2>
                    <AddTechBtn onClick={switchModalCreate}>+</AddTechBtn>
                </AddTechSection>
                <TechListContainer>
                    <TechsCard techs={techs} setTechs={setTechs} />     
                </TechListContainer>
            </section>
            {
                modalCreate === true ? (
                  <CreateTechModal setTechs={setTechs} />  
                ) : (
                    <>
                    </>
                )
            }   
        </Container>
        
    )
}