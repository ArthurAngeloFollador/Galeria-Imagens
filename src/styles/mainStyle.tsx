import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;
    }
`;

export default GlobalStyle;
