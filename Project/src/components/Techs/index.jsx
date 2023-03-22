import { useContext, useState } from "react"
import { TechsContext } from "../../contexts/TechsContext"
import { PatchTechModal } from "../Modal/ModalPatch"
import { TechsList, TechCard } from "./style"

export function TechsCard({techs, setTechs}){
    const { modalUpdate, switchModalUpdate } = useContext(TechsContext)
    const [ techSelected, setTechSelected ] = useState({})

    function handleClick(tech){
        switchModalUpdate()
        setTechSelected(tech)
    }

    if(!techs || techs.length === 0){
        return (
            <h2>Voce ainda não possui nenhuma tecnologia</h2>
        )
    }
    return (
        <TechsList>
            {     
                techs.map(tech => 
                    <>
                        <TechCard onClick={() => {handleClick(tech)}} key={tech.id} id={tech.id}>
                            <h3>{tech.title}</h3>
                            <span>{tech.status}</span>
                        </TechCard>
                    </>                
                )
            }
            {
                modalUpdate === true ? (
                    <PatchTechModal techs={techs} setTechs={setTechs} id={techSelected.id} />   
                ) : (
                    <></>
                )
            }
        </TechsList>     
        
    )
}