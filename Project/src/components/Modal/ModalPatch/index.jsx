import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechsContext } from "../../../contexts/TechsContext"
import { Modal, ModalBtnContainer, ModalBtnDelete, ModalBtnPatch, ModalBtnSubmit, ModalCloseBtn, ModalForm, ModalHeader, ModalInputContainer, ModalSelect, ModalWrapper } from "../style"

export function PatchTechModal({techs, setTechs, id, status}){
    const { register, handleSubmit } = useForm({})
    const { switchModalUpdate, updateTech, deleteTech } = useContext(TechsContext)  
    

    function submitUpdate(data){
        updateTech(data, id)

        const updatedTech = techs.filter(tech => tech.id === id)
        const newStatus = data.status
        updatedTech[0].status = newStatus

        const filteredTechs = techs.filter(tech => tech.id !== id)
        
        setTechs([...filteredTechs, updatedTech[0]])
        switchModalUpdate()
    }

    function submitDelete(){
        deleteTech(id)

        const filteredTechs = techs.filter(tech => tech.id !== id)

        setTechs(filteredTechs)
        switchModalUpdate()
    }

    return (
        <ModalWrapper>
            <Modal>
                <ModalHeader>
                    <h2>Tecnologia detalhes</h2>
                    <ModalCloseBtn onClick={switchModalUpdate}>x</ModalCloseBtn>
                </ModalHeader>
                <ModalForm onSubmit={handleSubmit(submitUpdate)}>
                    <ModalInputContainer>
                        <label htmlFor="select_level">Selecionar status</label>
                        <ModalSelect id="select_level" {...register("status")}>
                            <option value="iniciante">Iniciante</option>
                            <option value="intermediário">Intermediário</option>
                            <option value="avançado">Avançado</option>
                        </ModalSelect>
                    </ModalInputContainer> 
                    <ModalBtnContainer>
                        <ModalBtnPatch type="submit">Atualizar tecnologia</ModalBtnPatch>
                        <ModalBtnDelete type="button" onClick={submitDelete}>Exluir</ModalBtnDelete>
                    </ModalBtnContainer>    
                </ModalForm>
            </Modal>
        </ModalWrapper>
    )
}