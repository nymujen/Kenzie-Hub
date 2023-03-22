import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body, ul{
        margin: 0;
        padding: 0;
        background-color: #000000;
        color: #FFFFFF;
        font-family: 'Inter', sans-serif;
    }
    :root{
        --primary: #FF577F;
        --primary-focus: #FF427F;
        --primary-negative: #59323F;

        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;

        --title-1: 1rem;
        --title-2: 1rem;
        --title-3: 1rem;
        --headline: 0.75rem;
    }

`