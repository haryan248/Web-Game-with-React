import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
