import React, { useState } from "react";
import ReactDOM from "react-dom";

import "@styles/options.css";
import "@styles/global.css";

const Options = () => {
  const [usernameInput, setUsernameInput] = useState<string | undefined>(
    undefined
  );

  const updateConfig = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Store username in chrome.storage.local
    chrome.storage.local.set({
      malUser: usernameInput,
    });

    // Notify user that username has been stored
    chrome.notifications.create(
      {
        title: "Config Updated",
        message: "Your config has been updated.",
        type: "basic",
        iconUrl: "icon128.png",
      },
      () => window.close()
    );
  };

  return (
    <div className="p-4">
      <h1 className="pb-1 text-white">Configuration</h1>
      <span className="text-white text-sm">
        List of configurations for Calendar MAL extension
      </span>
      <form className="my-4 flex" onSubmit={updateConfig}>
        <input
          className=" border-gray-600 p-2 mr-2 border-2 rounded-md outline-none"
          placeholder="Your MAL username"
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <button
          className="bg-white text-mal-blue p-2 rounded-md font-bold"
          type="submit"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);
