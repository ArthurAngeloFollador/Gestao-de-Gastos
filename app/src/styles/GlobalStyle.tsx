import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
        
    }

    :root{
        background-color: #171717;
        /* background-color: #101922; */
    }
`;

export default GlobalStyle;
