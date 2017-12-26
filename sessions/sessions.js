/**
 * @fileoverview Library for handling session management
 * @author vinoaj@vinoaj.com (Vinoaj Vijeyakumaar)
 */

/**
 * Checks if the current pageview is the start of a session. This is achieved
 *   by comparing the current hostname with the referrer string. If they do
 *   not match we assume this is the start of a session.
 * Note: this does not work under the following conditions:
 *  - User moves from HTTPS to HTTP page (referrer header stripped)
 *  - User or code manipulates the document.referrer value
 * @returns {Boolean}
 */
function isSessionStart() {
    var currentHostname = window.location.hostname;
    var referrer = document.referrer;
    var selfRef = referrer.indexOf(currentHostname) > -1;

    return !selfRef;
}