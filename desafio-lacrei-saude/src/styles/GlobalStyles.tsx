import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     :root {
        /* Background */
        --backgound-invert-400: #ffffff;
        /* Border */
        --border-accent-200: #b2dfd0;
        --border-accent-400: #018762;
        --border-accent-600: #014c37;
        --border-hover-400: #007756;
     }
     * {
        margin: 0;
        padding: 0;
        border: none;
     }
`;