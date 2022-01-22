import React from "react";
import ReactDOM from "react-dom";

import "@styles/popup.css";

const PopUp = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <button className="bg-blue-400" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show &&
        ReactDOM.createPortal(
          <h1>Hello World</h1>,
          document.querySelector("#root")!
        )}
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <PopUp />
  </React.StrictMode>,
  document.getElementById("root")
);
