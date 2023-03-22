import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;
`

export const Content = styled.div`
    width: 350px;
`

export const HeaderRegister = styled.header`
    color: var(--primary);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 0;
`

export const FormContainer = styled.div`
    background-color: var(--grey-4);

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
` 

export const BackButton = styled.button`
    background-color: var(--grey-4);
    color: var(--grey-0);
    
    border: none;
    border-radius: 4px;

    padding: 10px;
`

export const Small = styled.span`
    font-size: var(--headline);
    font-weight: 600;
`

