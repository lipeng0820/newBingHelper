document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('lastUpdate', (result) => {
    const lastUpdate = result.lastUpdate;
    if (lastUpdate) {
      document.getElementById('status-bar').textContent = `上次更新时间为 ${lastUpdate}`;
    }
  });
});

document.getElementById("callHelper").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "callNewBingHelper" });
});

document.getElementById("updateSettings").addEventListener("click", () => {
  updateBingSettings();
});

document.getElementById("clearCookies").addEventListener("click", () => {
  clearBingCookies();
});


function updateBingSettings() {
  fetch('https://www.bing.com/account/general')
    .then(response => response.text())
    .then(htmlString => {
      const nBh_region = extractUsaHrefById(htmlString);
      const nBh_language = extractSimplifiedChineseHref(htmlString);
      chrome.storage.local.set({nBh_region: nBh_region, nBh_language: nBh_language, lastUpdate: new Date().toLocaleString()}, () => {
        const currentDate = new Date().toLocaleString();
        document.getElementById("status-bar").innerText = `更新成功，修改时间为 ${currentDate}`;
      });
    });
}

function clearBingCookies() {
  const bingCookieUrls = [
    'https://www.bing.com',
    'https://cn.bing.com',
    'https://global.bing.com',
    'https://www.bing.com.au',
    'https://www.bing.com.br',
    'https://www.bing.com.cn',
    'https://www.bing.com.es',
    'https://www.bing.com.fr',
    'https://www.bing.de',
    'https://www.bing.it',
    'https://www.bing.nl',
    'https://www.bing.ru',
    'https://www.bing.co.jp',
    'https://www.bing.co.kr',
    'https://www.bing.co.uk'
  ];

  bingCookieUrls.forEach(url => {
    chrome.cookies.getAll({url: url}, cookies => {
      cookies.forEach(cookie => {
        chrome.cookies.remove({url: url, name: cookie.name});
      });
    });
  });

  document.getElementById("status-bar").innerText = "清除Cookies成功";
}

function extractUsaHrefById(htmlString) {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, 'text/html');
  const usaLink = html.querySelector('a[href][h="ID=SERP,5194.1"]'); //设置在哪个地区意义不大，默认美国就好，UK 5192.1 ；JP 5183.1 
  return usaLink ? usaLink.href : '';
}

function extractSimplifiedChineseHref(htmlString) {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, 'text/html');
  const simplifiedChineseLink = html.querySelector('a[href][h="ID=SERP,5026.1"]'); //繁体 5035.1 ；日语 5028.1 ； 法语 5024.1 
  return simplifiedChineseLink ? simplifiedChineseLink.href : '';
}
