import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "./state/store";
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
    font-family: 'Avenir';
    
  }
  *,*:focus,*:hover,*:active{
    outline:0;
    ::-moz-focus-inner { border: 0; }
  }

  html,body {
    margin:0;
    padding:0;
    min-height:100vh2;
  }

`;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore({})}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
