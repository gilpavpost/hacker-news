import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import * as serviceWorker form './serviceWorker';

const renderApp = () => {
  ReactDOM.render(
    <div>

      <App />
    </div>,
    document.getElementById("root")
  );
};
renderApp();
// serviceWorker.unregister();
