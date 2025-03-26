import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     :root {
        /* Background */
        --background-invert-400: #ffffff;
        --background-accent-400: #018762;
        --background-accent-500: #007756;
        /* Border */
        --border-accent-200: #b2dfd0;
        --border-accent-400: #018762;
        --border-accent-600: #014c37;
        --border-hover-400: #007756;
        /* Text */
        --text-invert-400: #fffff;
     }
     * {
        margin: 0;
        padding: 0;
        border: none;
     }
`;