/**
 * @fileoverview Library for handling client IP lookup
 * @author vinoaj@vinoaj.com (Vinoaj Vijeyakumaar)
 */

// Create your own API key at https://ipstack.com/product
var API_KEY = '5088de54b47d56dac26bbb2b333312f0';
var API_ENDPOINT = 'http://api.ipstack.com/check?access_key=' + API_KEY;

//Load jQuery if it hasn't been already loaded
if (window.jQuery === undefined) {
  var s = document.createElement('script');
  s.src = "https://code.jquery.com/jquery-3.2.1.min.js";
  document.head.appendChild(s);
}

var ipLookup = {};

/**
 * Sample data structure
 * city: "Forresters Beach",
 * country_code: "AU",
 * country_name: "Australia",
 * ip: "61.xx.xx.xx",
 * latitude: -33.407,
 * longitude: 151.476,
 * metro_code: 0,
 * region_code: "NSW",
 * region_name: "New South Wales",
 * time_zone: "Australia/Sydney",
 * zip_code: "2260"
 **/
ipLookup.data = {};

/**
 * Executes an IP data lookup for current client
 * @returns {Promise}
 */
ipLookup.lookup = function () {
  return new Promise(function (resolve, reject) {
    $.getJSON(API_ENDPOINT).done(function (data) {
      ipLookup.data = data;
      resolve(data);
    }).fail(function (data) {
      reject(data);
    });
  });
};