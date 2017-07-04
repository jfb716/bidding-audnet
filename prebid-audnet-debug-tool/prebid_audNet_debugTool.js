console.log('%c<----- Prebid.js & Audience Network Debug START ----->', 'color: magenta; font-weight: bold;');
console.log(" ");
console.log('%c<----- Wrapper Info ----->', 'color: cyan; font-weight: bold;');
console.log(" ");
console.log("Domain: " + pbjs.publisherDomain);
console.log("Version: " + pbjs.version);
if (typeof(PREBID_TIMEOUT) === "number"){
 console.log("Timeout: " + PREBID_TIMEOUT);
}
console.log(" ");

var bidSet = pbjs.bidderSettings.standard.adserverTargeting;

for (var option in bidSet){
    var key = bidSet[option].key;
    console.log("DFP KV: " + key);

}

console.log(" ");
console.log(" ");
console.log('%c<----- All Audience Network Bids ----->', 'color: cyan; font-weight: bold;');

var responses = pbjs.getBidResponses();
var output = [];
for (var adunit in responses) {
    if (responses.hasOwnProperty(adunit)) {
        var bids = responses[adunit].bids;
        for (var i = 0; i < bids.length; i++) {
               var b = bids[i];
               if (b.bidder === 'audienceNetwork'){
                output.push({
                'bidder': b.bidder, 'adunit': adunit, 'sizes': b.size, 'format': b.fb_format, 'placementId': b.fb_placementid, 'adId': b.adId, 'bidId': b.fb_bidid,
                'time': b.timeToRespond, 'bid': b.pbHg, 'status': b.statusMessage
            });

            }
        }
    }
}
if (output.length) {
    if (console.table) {
        console.table(output);
    } else {
        for (var j = 0; j < output.length; j++) {
            console.log(output[j]);
        }
    }
} else {
    console.warn('No Bids From Audience Network');
}

console.log(" ");
console.log(" ");
console.log('%c<----- All 320x50 Bids ----->', 'color: cyan; font-weight: bold;');

var responses = pbjs.getBidResponses();
var output = [];
for (var adunit in responses) {
    if (responses.hasOwnProperty(adunit)) {
        var bids = responses[adunit].bids;
        for (var i = 0; i < bids.length; i++) {
               var b = bids[i];
               if (b.size === '320x50'){
                output.push({
                'adunit': adunit, 'sizes': b.size, 'adId': b.adId, 'bidder': b.bidder,
                'time': b.timeToRespond, 'cpm': b.pbHg, 'msg': b.statusMessage
            });

            }
        }
    }
}
if (output.length) {
    if (console.table) {
        console.table(output);
    } else {
        for (var j = 0; j < output.length; j++) {
            console.log(output[j]);
        }
    }
} else {
    console.warn('No Bids For 320x50');
}

console.log(" ");
console.log(" ");
console.log('%c<----- All 300x250 Bids ----->', 'color: cyan; font-weight: bold;');

var responses = pbjs.getBidResponses();
var output = [];
for (var adunit in responses) {
    if (responses.hasOwnProperty(adunit)) {
        var bids = responses[adunit].bids;
        for (var i = 0; i < bids.length; i++) {
               var b = bids[i];
               if (b.size === '300x250'){
                output.push({
                'adunit': adunit, 'sizes': b.size, 'adId': b.adId, 'bidder': b.bidder,
                'time': b.timeToRespond, 'cpm': b.pbHg, 'msg': b.statusMessage
            });

            }
        }
    }
}
if (output.length) {
    if (console.table) {
        console.table(output);
    } else {
        for (var j = 0; j < output.length; j++) {
            console.log(output[j]);
        }
    }
} else {
    console.warn('NO Bids for 300x250');
}

console.log(" ");
console.log(" ");
console.log('%c<----- All Bids With Undefined Sizes ----->', 'color: cyan; font-weight: bold;');

var responses = pbjs.getBidResponses();
var output = [];
for (var adunit in responses) {
    if (responses.hasOwnProperty(adunit)) {
        var bids = responses[adunit].bids;
        for (var i = 0; i < bids.length; i++) {
               var b = bids[i];
               if (b.size === undefined){
                output.push({
                'adunit': adunit, 'sizes': b.size, 'adId': b.adId, 'bidder': b.bidder,
                'time': b.timeToRespond, 'cpm': b.pbHg, 'msg': b.statusMessage
            });

            }
        }
    }
}
if (output.length) {
    if (console.table) {
        console.table(output);
    } else {
        for (var j = 0; j < output.length; j++) {
            console.log(output[j]);
        }
    }
} else {
    console.warn('NO Bids With Undefined Size');
}


console.log(" ");
console.log(" ");
console.log('%c<----- All Bidders / All Sizes ----->', 'color: cyan; font-weight: bold;');

var responses = pbjs.getBidResponses();
var output = [];
for (var adunit in responses) {
    if (responses.hasOwnProperty(adunit)) {
        var bids = responses[adunit].bids;
        for (var i = 0; i < bids.length; i++) {
            var b = bids[i];
            output.push({
                'adunit': adunit, 'sizes': b.size, 'adId': b.adId, 'bidder': b.bidder,
                'time': b.timeToRespond, 'cpm': b.pbHg, 'msg': b.statusMessage
            });
        }
    }
}
if (output.length) {
    if (console.table) {
        console.table(output);
    } else {
        for (var j = 0; j < output.length; j++) {
            console.log(output[j]);
        }
    }
} else {
    console.warn('NO prebid responses');
}

console.log(" ");
console.log(" ");
console.log('%c<----- Winning Bidders For All Sizes ----->', 'color: cyan; font-weight: bold;');

var bids = pbjs._winningBids;
var output = [];
for (var i = 0; i < bids.length; i++) {
    var b = bids[i];
    output.push({
        'adunit': b.adUnitCode, 'sizes': b.size, 'adId': b.adId, 'bidder': b.bidder,
        'time': b.timeToRespond, 'cpm': b.pbHg
    });
}
if (output.length) {
    if (console.table) {
        console.table(output);
    } else {
        for (var j = 0; j < output.length; j++) {
            console.log(output[j]);
        }
    }
} else {
    console.warn('No prebid winners');
}


console.log(" ");
console.log(" ");
console.log('%c<----- Prebid.js & GPT Objects ----->', 'color: cyan; font-weight: bold;');
console.log(" ");
console.log(pbjs.getBidResponses());
console.log(googletag);

console.log(" ");
console.log(" ");
console.log('%c<----- Prebid.js & Audience Network Debug END ----->', 'color: magenta; font-weight: bold;');
