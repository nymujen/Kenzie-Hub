import styled from 'styled-components'

export const TechsList = styled.ul`
    list-style: none;

    background-color: var(--grey-3);

    padding: 20px;

    border-radius: 4px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const TechCard = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border-radius: 4px;

    padding: 0px 5px;

    background-color: var(--grey-4);

    cursor: pointer;
    :hover{
        background-color: var(--grey-2);
    }
`