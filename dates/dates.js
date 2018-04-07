/**
 * @fileoverview Library for handling dates and times
 * @author vinoaj@vinoaj.com (Vinoaj Vijeyakumaar)
 */

/**
 * Converts a string representation of a month name to it's numerical value
 * @param {string} monthStr Name of the month (e.g. 'Apr', 'April')
 * @returns {Number}
 */
function monthStrToInt(monthStr) {
    var today = new Date();
    var parseStr = monthStr + ' 10, ' + today.getFullYear() + ' GMT+1000';
    var d = new Date(Date.parse(parseStr));
    var monthInt = d.getMonth() + 1;
    return monthInt;
}

/**
 * Takes day, month, and year values and converts it into a Date object
 * @param {number} day 
 * @param {number} month 
 * @param {number} year 
 * @returns {Date}
 */
function dateStrToDateObj(day, month, year) {
    return new Date(Date.parse(day + ' ' + month + ', ' + year + ' GMT+1000'));
}

/**
 * Converts a Date object into its YYYY-MM-DD string representation
 * @param {Date} dateObj Date object to be converted
 * @returns {string} YYYY-MM-DD string representation of the date object
 */
function getDateStrYYYYMMDD(dateObj) {
    return dateObj.getISOString().split('T')[0];
}