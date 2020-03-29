import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";
import avenir from "./assets/fonts/Avenir-Black.woff";
import avenir2 from "./assets/fonts/Avenir-Black.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Avenir';
    src: local('Avenir'),
    url(${avenir2}) format('woff2'),
    url(${avenir}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
    outline: 0;
    font-family: 'Avenir';
    ::-moz-focus-inner { border: 0; }
  }
  body {
    margin:0;
    padding:0;
  }

`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
