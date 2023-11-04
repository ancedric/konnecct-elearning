import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
    @font-face {
        font-family: 'Epilogue';
        src: url('./Fonts/Epilogue-Light.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    } 
    @font-face {
        font-family: 'Epilogue-bold';
        src: url('./Fonts/Epilogue-Bold.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    } 
    `;
export default GlobalStyle;