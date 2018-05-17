document.addEventListener('DOMContentLoaded', function() {
    var confirmation_button = document.getElementById("confirmation_button");
    confirmation_button.addEventListener('click', function() {
        chrome.extension.getBackgroundPage().clean_active_tab_cookie();
    });
});