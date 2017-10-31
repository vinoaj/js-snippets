
var cookieHandler = {};

cookieHandler.isValidCookie = function (cookieName) {
    var cookieValue = cookieHandler.getCookieValue(cookieName);
    return (cookieValue == '') ? false : true;
};

//Adapted from https://www.w3schools.com/js/js_cookies.asp
cookieHandler.setCookie = function (cookieName, cookieValue, nDays) {
    var d = new Date();
    d.setTime(d.getTime() + (nDays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue +
        ";" + expires + ";path=/";
    console.log(document.cookie);
}

//Adapted from https://www.w3schools.com/js/js_cookies.asp
cookieHandler.getCookieValue = function (cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return '';
}

cookieHandler.deleteCookie = function (cookieName) {
  cookieHandler.setCookie(cookieName,"",-730);
}
