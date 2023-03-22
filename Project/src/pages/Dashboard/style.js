import styled from 'styled-components'

export const Container = styled.div`
    
`

export const HeaderDashboard = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 200px;

    color: var(--primary);

    border-bottom: 2px solid var(--grey-2);

    @media(max-width: 610px){
        padding: 0px 20px;
    }
`

export const SectionNameAndModule = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 200px;

    border-bottom: 2px solid var(--grey-2);

    @media(max-width: 610px){
        padding: 0px 20px;
    }
`

export const Small = styled.span`
    font-size: var(--headline);
    font-weight: 600;
`

export const LogoutButton = styled.button`
    background-color: var(--grey-4);
    color: var(--grey-0);
    
    border: none;
    border-radius: 4px;

    padding: 10px;
`

export const AddTechSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 200px;

    @media(max-width: 610px){
        padding: 0px 20px;
    }
`

export const AddTechBtn = styled.button`
    background-color: var(--grey-3);
    color: var(--grey-0);

    padding: 10px;

    border: 0px;
    border-radius: 4px;

    cursor: pointer;
`

export const TechListContainer = styled.div`
    padding: 0px 200px;

    @media(max-width: 610px){
        padding: 0px 20px;
    }
`
