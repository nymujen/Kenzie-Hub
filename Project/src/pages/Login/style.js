import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
`

export const Content = styled.div`
    width: 350px;
`

export const HeaderLogin = styled.header`
    color: var(--primary);
    text-align: center;

    margin-bottom: 35px;
`

export const FormContainer = styled.div`
    background-color: var(--grey-4);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;

    padding: 20px;
`

export const Buttons = styled.button`
    height: 38px;
    width: 100%;

    border: 0px;
    border-radius: 4px;

    background-color: var(--primary);
    color: var(--grey-0);

    :hover{
        background-color: var(--primary-focus);
    }
`

export const small = styled.span`
    font-size: var(--headline);
    font-weight: 600;
`