document.getElementById("fillForm").addEventListener("click", () => {
  // Logic to send a message to content.js to fill the form
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "fillForm" });
  });
});
