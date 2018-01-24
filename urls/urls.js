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
