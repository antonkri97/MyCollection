import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Images } from "./components/Images";
import registerServiceWorker from "./registerServiceWorker";
import { imagesReducer } from "./reducers";
import { createStore } from "redux";

const store = createStore(imagesReducer);

function render() {
  ReactDOM.render(
    <Images store={store} images={store.getState().images} />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);

registerServiceWorker();
