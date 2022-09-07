import { createGlobalStyle } from "styled-components";

const GlobalStyle =  createGlobalStyle`
    html{
        font-size: 62.5%;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: rgba(245,245, 255, 0.9);

    }
`;

export default GlobalStyle;