/**
 * @fileoverview Library for handling client IP lookup
 * @author vinoaj@vinoaj.com (Vinoaj Vijeyakumaar)
 */

 if (window.jQuery === undefined) {
    var s = document.createElement('script');
    s.src = "//code.jquery.com/jquery-3.2.1.min.js";
    document.head.appendChild(s);
}

var ipLookup = {};
ipLookup.lookupData = {};
ipLookup.promises = {};

ipLookup.promises.geoIpCall = new Promise(function(resolve, reject) {
  $.getJSON('//freegeoip.net/json/?callback=?').done(function(data) {
      resolve(data);
  }).fail(function(data) {
      reject(data);
  });
});

ipLookup.lookup = function () {
  return new Promise(function(resolve,reject) {
    ipLookup.promises.geoIpCall.then(function(data) {
      ipLookup.lookupData = data;
      resolve(data);
    }, function(error) {
      reject(data);
    });
  });
};
