var url, rel;

chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "nav-rel-info-broadcast");
    port.onMessage.addListener(function(msg) {
        url = msg.url;
        rel = msg.rel;
        console.debug(['on nav-rel-info', url, rel]);
    });
});

var filter = {urls:["<all_urls>"]};
var opt_extraInfoSpec = ['blocking'];
var callback2 = function(details) {
    if (details.url == url) {
        url = null;
        console.debug(['callback2', details.url, rel, details]);
        var requestHeaders = details.requestHeaders || [];
        requestHeaders.push({ name:'X-Relationship', value: rel });
        return {requestHeaders: requestHeaders};
    }
}
chrome.webRequest.onBeforeSendHeaders.addListener(
    callback2, filter, opt_extraInfoSpec);
