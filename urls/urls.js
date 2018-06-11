/**
 * @fileoverview Library for handling URIs
 * @author vinoaj@vinoaj.com (Vinoaj Vijeyakumaar)
 */

/**
 * Converts URL query parameter keys and values into a JSON object
 * @returns {JSON}
 */
function urlParamsToObject() {
    var queryStr = window.document.location.search;
    
    var qObj = {};
    var queryParts = [];
    var nQueryParts = 0;

    //Remove leading ?
    queryStr = queryStr.slice(1);

    //Remove everything after #
    queryStr = queryStr.split('#')[0];

    queryParts = queryStr.split('&');
    nQueryParts = queryParts.length;

    for (var i = 0; i < nQueryParts; i++) {
        var part = queryParts[i];
        var partParts = part.split('=');
        var queryParam = partParts[0];
        var queryValue = partParts[1] ? partParts[1] : undefined;
        qObj[queryParam] = queryValue;
    }

    return qObj;
}


function getURLParameterValue(key) {
    var queryStr = window.document.location.search;

    if (queryStr.length > 0) {
        //Remove leading ? and everything after #
        queryStr = queryStr.slice(1);
        queryStr = queryStr.split('#')[0];

        queryParts = queryStr.split('&');
        nQueryParts = queryParts.length;

        for (var i = 0; i < nQueryParts; i++) {
            var part = queryParts[i];
            var partParts = part.split('=');
            var queryParam = partParts[0];
            
            if (queryParam == key) {
                var queryValue = partParts[1] ? partParts[1] : undefined;
                return queryValue;
            }
        }
    }

    return false;
}


/**
 * Returns an encoded string that can be used as part of a URL
 * @param {Object} dataObj Object of key-value pairs
 */
function generateURLSearchString(dataObj) {
    var searchStrComponents = [];
    for (var key in dataObj) {
        var valEnc = encodeURIComponent(dataObj[key]);
        var keyEnc = encodeURIComponent(key);
        searchStrComponents.push(keyEnc + "=" + valEnc);
    }

    return searchStrComponents.join("&");
}


var trackOutboundLink = function(url) {
    var re = /prourls\.com\?.*url=(.*)/
    var matches = url.match(re);
    if (matches && matches.length > 0) {
        url = matches[1]
    }

    console.log(url);

    ga('send', 'event', 'outbound', 'click', url, {
      'transport': 'beacon',
      'hitCallback': function(){document.location = url;}
    });
 };