import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";


import { FoodServiceProvider } from "./service/service-context";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Service from "./service/service";

const recipeService = new Service()



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <FoodServiceProvider value={recipeService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FoodServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
