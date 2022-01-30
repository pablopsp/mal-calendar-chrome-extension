chrome.runtime.onInstalled.addListener(
  (details: chrome.runtime.InstalledDetails) => {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL)
      chrome.runtime.openOptionsPage();
  }
);
