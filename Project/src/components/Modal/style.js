import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Modal = styled.div`
    background-color: var(--grey-3);

    width: 350px;

    border-radius: 4px;

    padding: 20px;

    @media(max-width: 400px){
        width: 270px;
    }
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ModalCloseBtn = styled.span`
    padding: 10px;
    
    cursor: pointer;
` 

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ModalInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ModalInputs = styled.input`
    height: 38px;

    background-color: var(--grey-2);

    outline: var(--grey-1);

    border: 0px;
    border-radius: 4px;
`

export const ModalSelect = styled.select`
    height: 38px;

    background-color: var(--grey-2);
    color: var(--grey-1);

    outline: var(--grey-4);

    border: 0px;
    border-radius: 4px;
`

export const ModalBtnSubmit = styled.button`
    height: 38px;

    border: 0px;
    border-radius: 4px;

    color: var(--grey-0);
    background-color: var(--primary);
`

export const ModalBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ModalBtnPatch = styled.button`
    height: 38px;
    width: 70%;

    border: 0px;
    border-radius: 4px;

    color: var(--grey-0);
    background-color: var(--primary-negative); 
`

export const ModalBtnDelete = styled.button`
    height: 38px;
    width: 25%;

    border: 0px;
    border-radius: 4px;

    color: var(--grey-0);
    background-color: var(--grey-1); 
`