chrome.browserAction.onClicked.addListener(function(tab) {
  alert("Clicked! Sending request to tab id:" + tab.id);
  chrome.tabs.executeScript(tab.id, {"code":"alert('HARROooooo!');", "allFrames":"true"});
});
