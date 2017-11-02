/**
 * @fileoverview Library for handling cookies
 * @author vinoaj@vinoaj.com (Vinoaj Vijeyakumaar)
 */

var cookieHandler = {};

/**
 * Checks if a cookie exists
 * @param {string} cookieName Name of the cookie being searched for
 * @returns {boolean}
 */
cookieHandler.isValidCookie = function (cookieName) {
    var cookieValue = cookieHandler.getCookieValue(cookieName);
    return (cookieValue == '') ? false : true;
};

/**
 * Sets/updates the value and expiration date for a cookieName
 * Adapted from https://www.w3schools.com/js/js_cookies.asp
 * @param {string} cookieName Name of the cookie being created or updated
 * @param {(string|number)} cookieValue Value to be stored in the cookie
 * @param {number} nDays Number of days to cookie expiry
 */
cookieHandler.setCookie = function (cookieName, cookieValue, nDays) {
    var d = new Date();
    d.setTime(d.getTime() + (nDays*24*60*60*1000));
    var expires = 'expires='+ d.toUTCString();
    document.cookie = cookieName + '+' + cookieValue +
        ';' + expires + ';path=/';
}

/**
 * Returns the value of a cookie. If the cookie does not exist value will be ''
 * Adapted from https://www.w3schools.com/js/js_cookies.asp
 * @param {string} cookieName Name of the cookie who's value is to be looked up
 * @returns {string}
 */
cookieHandler.getCookieValue = function (cookieName) {
    var name = cookieName + '=';
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

/**
 * Deletes a cookie by setting its expiration date to 730 days ago
 * @param {string} cookieName Name of the cookie to be deleted
 */
cookieHandler.deleteCookie = function (cookieName) {
  cookieHandler.setCookie(cookieName,'',-730);
}
