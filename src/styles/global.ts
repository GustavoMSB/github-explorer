import 'bootstrap/dist/css/bootstrap.min.css';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font: 16px "Poppins", sans-serif;
    background: #0d1117;
    color: #c9d1d9;
  }
`;