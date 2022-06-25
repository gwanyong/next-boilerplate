import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";
import CustomFonts from "~/styles/custom-fonts";

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${CustomFonts};
  * {
     box-sizing: border-box;
  }
  body{
    background: #262430;
    font-family: "Spoqa Han Sans Neo","Surroundo", sans-serif;
  }
  #__next{
    height: 100vh;
    display: flex;
    align-items: center;
    scroll-behavior: smooth;
  }
  a {
    scroll-behavior: smooth;
    color: inherit;
    text-decoration: none;
  }
  a,button{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
  /* 웹앱으로 안에 들어갈시 필수로 넣어야함 */
  input, button {
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
  }
  input, textarea{
    user-select: text;
  } 
`;

export const Surround = css`
  font-family: "Cafe24Ssurround", sans-serif;
`;
export const OneLine = css`
  //width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const TwoLine = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const Threeline = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
export default GlobalStyle;
