$(document).ready(function() {
    $.material.init();
});


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {command: "extractData"}, function(response) {

    console.log("response");


    var p = document.createElement('div');
    p.className  = "panel panel-default"

    var pHeading = document.createElement('div');
    pHeading.className = "panel-heading";
    pHeading.innerText = "Extracted Frames"
    p.appendChild(pHeading);


    var pBody= document.createElement('div');
    pBody.className = "panel-body";

    for(var i in response)
    {
        var linkName = response[i];
        var n = linkName.indexOf('/',8);

        if ( n != -1) {
          linkName = linkName.substring(0, n);
        } else {
          linkName = "Invalid SRC";
        }

       var a = document.createElement('a');
       var linkText = document.createTextNode(linkName);
       a.appendChild(linkText);
       a.title = response[i];
       a.href = response[i];
       a.className  = "btn btn-warning"
       pBody.appendChild(a);

    }
    p.appendChild(pBody);
    document.body.appendChild(p);


  });
});
