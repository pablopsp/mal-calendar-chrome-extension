import React from "react";
import ReactDOM from "react-dom";

import "@styles/options.css";

const Options = () => {
  return (
    <>
      <h1 className="text-blue-300">Option's page</h1>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);
