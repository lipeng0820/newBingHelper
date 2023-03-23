chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "callNewBingHelper") {
    chrome.storage.local.get(['nBh_region', 'nBh_language'], (result) => {
      const nBh_region = result.nBh_region || "https://www.bing.com/account/action?scope=web&cc=us&FORM=W5WA&uid=E2313290&sid=145E3F849DBD68661CFA2D589C936941&ru=%2f%3fform%3dREDIRERR&settingpage=1";
      const nBh_language = result.nBh_language || "https://www.bing.com/account/action?scope=web&setlang=zh-Hans&FORM=W5WA&uid=E2313290&sid=145E3F849DBD68661CFA2D589C936941&ru=%2f%3fform%3dREDIRERR%26cc%3dus&settingpage=1&ntb=1";

      Promise.all([
        fetch(nBh_region),
        fetch(nBh_language)
      ]).then(() => {
        chrome.tabs.update({ url: "https://chat.bing.com" });
      });
    });
  }
});
