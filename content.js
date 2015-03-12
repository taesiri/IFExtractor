var iframes = document.getElementsByTagName('iframe');
var iframesData = {};
for(var i=0; i<iframes.length; i++){
  iframesData['Link ' + i] = iframes[i].src == "" ? "Src Field is Empty" : iframes[i].src ;
}

console.log(iframesData);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.command == "extractData")
      sendResponse(iframesData);
  });
