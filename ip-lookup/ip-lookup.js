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

ipLookup.lookup = function () {
  var p = new Promise(function(resolve, reject) {
    $.getJSON('//freegeoip.net/json/?callback=?').done(function(data) {
        resolve(data);
    }).fail(function(data) {
        reject(data);
    });
  });

  p.then(function(data) {
      ipLookup.lookupData = data;
      console.log('2: ', ipLookup.lookupData);
      return data;
  });
}

ipLookup.lookup();
//console.log('1: ', ipLookup.lookupData);
