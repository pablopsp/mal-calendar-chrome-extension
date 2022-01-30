import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "@styles/popup.css";
import "@styles/global.css";

const PopUp = () => {
  const [malUser, setMalUser] = useState<string | undefined>("malUser");

  // Get username from chrome.storage.local
  useEffect(() => {
    (async () =>
      setMalUser((await chrome.storage.local.get("malUser")).malUser))();
  }, []);

  if (!malUser) chrome.runtime.openOptionsPage(() => window.close());
  return <>{malUser}</>;
};

ReactDOM.render(
  <React.StrictMode>
    <PopUp />
  </React.StrictMode>,
  document.getElementById("root")
);
