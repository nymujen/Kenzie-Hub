import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechsContext } from "../../../contexts/TechsContext"
import { Modal, ModalBtnSubmit, ModalCloseBtn, ModalForm, ModalHeader, ModalInputContainer, ModalInputs, ModalSelect, ModalWrapper } from "../style"

export function CreateTechModal({setTechs}){
    const { register, handleSubmit } = useForm({})
    const { switchModalCreate, createTech } = useContext(TechsContext)

    function submit(data){
        createTech(data)
        setTechs((oldTechs) => [...oldTechs, data])
        switchModalCreate()
    }

    return (
        <ModalWrapper>
            <Modal>
                <ModalHeader>
                    <h2>Cadastrar tecnologia</h2>
                    <ModalCloseBtn onClick={switchModalCreate}>x</ModalCloseBtn>
                </ModalHeader>
                <ModalForm onSubmit={handleSubmit(submit)}>
                    <ModalInputContainer>
                        <label htmlFor="input_name">Nome</label>
                        <ModalInputs type="text" id="input_name" {...register("title")} />
                    </ModalInputContainer>
                    <ModalInputContainer>
                        <label htmlFor="select_level">Selecionar status</label>
                        <ModalSelect id="select_level" {...register("status")}>
                            <option value="iniciante">Iniciante</option>
                            <option value="intermediário">Intermediário</option>
                            <option value="avançado">Avançado</option>
                        </ModalSelect>
                    </ModalInputContainer>
                    <ModalBtnSubmit type="submit">Cadastrar tecnologia</ModalBtnSubmit>
                </ModalForm>
            </Modal>
        </ModalWrapper>
    )
}