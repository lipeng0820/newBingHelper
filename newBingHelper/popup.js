document.getElementById("callHelper").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "callNewBingHelper" });
});
