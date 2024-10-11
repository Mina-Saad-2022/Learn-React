import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hook_usestate from "./Hooks/UseState/Hook_usestate";
import App_Card from "./Props/App_Card";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-12 mb-4">
          <App_Card />
        </div>
        <div className="col-12 col-lg-12 mb-4">
          <Hook_usestate />
        </div>
      </div>
    </div>
  );
}

export default App;
