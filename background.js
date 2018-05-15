function clean_cookie(tab){
    var current_url = tab.url;
    chrome.cookies.getAll({url: current_url}, function(cookies) {
        for(var i in cookies){
            chrome.cookies.remove({
                url: current_url + cookies[i].path,
                name: cookies[i].name
            })
        }
        var refresh_code = 'window.location.reload(true);';
        chrome.tabs.executeScript({code: refresh_code});
    });
}

chrome.browserAction.onClicked.addListener(function(tab) {
    clean_cookie(tab);
});