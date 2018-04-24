import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { imagesReducer } from "./reducers";
import { createStore } from "redux";
import ImagesContainer from "./containers/ImagesContainer";

const store = createStore(imagesReducer);

ReactDOM.render(
  <Provider store={store}>
    <ImagesContainer />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
