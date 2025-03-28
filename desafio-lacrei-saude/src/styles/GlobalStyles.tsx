import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
      :root {
            /* Background Colors*/
            --background-invert-400: #ffffff;
            --background-accent-400: #018762;
            --background-accent-500: #007756;

            /* Border Colors*/
            --border-accent-200: #b2dfd0;
            --border-accent-400: #018762;
            --border-accent-600: #014c37;
            --border-hover-400: #007756;

            /* Text Colors*/
            --text-invert-400: #fffff;
            --text-heading-400: #131313;
            --text-body-400: #2d2d2d;
            --text-hover-400: #007756;
            --text-sucess-400: #298a46;
            --text-warning-400: #963d1d;

            /*Font-sizes*/
            /*HeadLine*/
            --Headline-Xl: 48px;
            --Headline-lg: 40px;
            --Headline-base: 32px;
            --Headline-sm-high200: 24px;

            /*Text*/
            --Text-xl: 18px;
            --Text-base: 16px;
            --Text-sm: 14px;
         }

     * {
        margin: 0;
        padding: 0;
        border: none;
        font-family: "Lato", sans-serif;

        background-color: var(--background-invert-400);
        font-size: var(--Text-base);
     }

     /* Monitor Ultra Wide Screen*/
     @media (min-width: 2560px) {
   }
     /* Monitor HD */
     @media (min-width: 1366px) and (max-width:1920px) {
   }
     /* Smartphones*/
     @media (min-width: 360px) and (max-width:720px) {
   }
`;