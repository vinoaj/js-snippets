
var cookieHandler = {};

cookieHandler.isValidCookie = function (cookieName) {
    var cookieValue = getCookie(cookieName);
    return (cookieValue == '') ? true : false;

    /*
    if (cookieValue == '') {
        return false;
    }

    return true;
    */
};

//Adapted from https://www.w3schools.com/js/js_cookies.asp
cookieHandler.setCookie = function (cookieName, cookieValue, nDays) {
    var d = new Date();
    d.setTime(d.getTime() + (nDays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue +
        ";" + expires + ";path=/";
}

//Adapted from https://www.w3schools.com/js/js_cookies.asp
cookieHandler.getCookie = function (cookieName) {
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
