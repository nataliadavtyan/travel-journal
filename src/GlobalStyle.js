import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: Inter, sans-serif;
        color: #2B283A;
        font-size: 10.2px;
    }

    h1, h2, h3, p {
        margin: 0;
    }
`