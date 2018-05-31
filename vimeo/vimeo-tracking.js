/**
 * @fileoverview Identify Vimeo iframes and send events to Google Tag Manager
 * @author Vinoaj Vijeyakumaar vinoaj@vinoaj.com
 */


var VIMEO_REPORT_PERCENTAGES = [0.10, 0.25, 0.50, 0.75, 0.90, 0.95];

var vimeoIframes = getVimeoIframes();
listenToPlayers(vimeoIframes);

/**
 * Return an array of iframe elements containing Vimeo videos
 * @returns {Array} Array of iframe elements containing Vimeo videos
 */
function getVimeoIframes() {
    var RE_VIMEO = /player\.vimeo\.com\/video\/[0-9]+/i;
    var matchedIframes = [];
    var iframes = document.getElementsByTagName('iframe');

    for (var i = 0, l = iframes.length; i < l; i++) {
        var iframe = iframes[i];
        var iframeSrc = iframe.attributes.src.value;
        
        if (RE_VIMEO.test(iframeSrc)) {
            matchedIframes.push(iframe);
        }
    }

    return matchedIframes;
}

/**
 * Iterates through all Vimeo iframes, and handles the following events: 
 *   plays, pauses, ends, time updates
 * @param {Array} iframes Array of reference to iframe elements
 */
function listenToPlayers(iframes) {
    iframes.forEach(function (iframe){
        var player = new Vimeo.Player(iframe);
        var videoTitle = "Default Video Title";
        player.getVideoTitle().then(function(title) {
            videoTitle = title;
        }).catch(function(error) {
            // Do nothing
        });
        
        player.on('play', function(data) {
            window.dataLayer.push({
                'event': 'videoPlay',
                'videoTitle': videoTitle,
                'eventData': {
                    'category': 'Videos',
                    'action': 'Play',
                    'label': videoTitle,
                    'value': data.seconds
                }
            });
        });

        player.on('pause', function(data) {
            window.dataLayer.push({
                'event': 'videoPaused',
                'videoTitle': videoTitle,
                'eventData': {
                    'category': 'Videos',
                    'action': 'Pause',
                    'label': videoTitle,
                    'value': data.seconds
                }
            });
        });

        player.on('ended', function(data) {
            window.dataLayer.push({
                'event': 'videoEnded',
                'videoTitle': videoTitle,
                'eventData': {
                    'category': 'Videos',
                    'action': 'Ended',
                    'label': videoTitle,
                    'value': data.seconds
                }
            });
        });

        player.on('timeupdate', function(data) {
            var matchIx = VIMEO_REPORT_PERCENTAGES.indexOf(data.percent);
            if (matchIx > -1) {
                var pct = VIMEO_REPORT_PERCENTAGES[matchIx] * 100;
                window.dataLayer.push({
                    'event': 'videoProgress',
                    'videoTitle': videoTitle,
                    'eventData': {
                        'category': 'Videos',
                        'action': 'Progress - ' + pct + '%',
                        'label': videoTitle,
                        'value': data.seconds
                    }
                });
            }
        });
    });
}