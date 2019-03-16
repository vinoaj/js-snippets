/**
 * @fileoverview Library for handling client IP lookup
 * @author vinoaj@vinoaj.com (Vinoaj Vijeyakumaar)
 */

var API_ENDPOINT = 'https://freegeoip.app/json/';

//Load jQuery if it hasn't been already loaded
if (window.jQuery === undefined) {
  var s = document.createElement('script');
  s.src = "https://code.jquery.com/jquery-3.2.1.min.js";
  document.head.appendChild(s);
}

var ipLookup = {};

/**
 * Sample data structure
 {
    "ip": "XX.XX.XX.XX",
    "country_code": "AU",
    "country_name": "Australia",
    "region_code": "NSW",
    "region_name": "New South Wales",
    "city": "Sydney",
    "zip_code": "XXXX",
    "latitude": -33.8708,
    "longitude": 151.2073,
  }
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