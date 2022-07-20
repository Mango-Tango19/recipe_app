import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

import { FoodServiceProvider } from "./service/service-context";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Service from "./service/service";

const recipeService = new Service();

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

reportWebVitals();
