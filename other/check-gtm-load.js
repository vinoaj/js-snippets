/** 
 * Code to insert into an HTML document (preferably in <head>) to determine 
 *   whether Google Tag Manager has loaded or not. If it's not loaded, a
 *   HTTP endpoint is contacted to inform it of this.
 */

function checkGTMLoad() {
    if (!window['google_tag_manager']) {
        // console.log('GTM did not load');
        payload = {
            tid: 'UA-108507372-1',
            dp: '/GTM_not_fired' + document.location.pathname + document.location.search
        };

        var endpoint = 'https://us-central1-phrasal-charger-185822.cloudfunctions.net/relayMPHit';
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', endpoint);
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send(JSON.stringify(payload));
    } else {
        //Do something here
        console.log('GTM Loaded');
    }
}

function assessState() {
    switch (document.readyState) {
        case 'loading':
            document.onreadystatechange = assessState;
            break;
        // case 'interactive':
        case 'complete':
            checkGTMLoad();
            break;
    }
}

assessState();
