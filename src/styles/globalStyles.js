import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
     margin:0;
     box-sizing: border-box;

}
body{
    font-family:'Nunito Sans', sans-serif;
    letter-spacing:0.6px;
    color:white;
}
`