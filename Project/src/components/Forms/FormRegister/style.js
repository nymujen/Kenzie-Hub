import styled from 'styled-components'

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;

    width: 80%;

    padding: 20px 0;
`

export const Inputs = styled.input`
    width: 100%;

    padding: 0;

    border: none;
    border-radius: 4px;

    background-color: var(--grey-2);
    color: var(--grey-0);

    offset: var(--grey-0);

    height: 38px;
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

export const SelectModule = styled.select`
    height: 38px;
    width: 100%;

    border: none;
    border-radius: 4px;

    background-color: var(--grey-2);
    color: var(--grey-0);
`