console.log('%c<----- Prebid.js & Audience Network Debug START ----->', 'color: magenta; font-weight: bold;');
console.log(" ");
console.log('%c<----- Wrapper Info ----->', 'color: cyan; font-weight: bold;');
console.log(" ");
console.log("Domain: " + pbjs.publisherDomain);
console.log("Version: " + pbjs.version);
if (typeof(PREBID_TIMEOUT) === "number"){
  var pbjsTimeout = PREBID_TIMEOUT;
 console.log("Timeout: " + pbjsTimeout);
}
console.log(" ");

var bidSet = pbjs.bidderSettings.standard.adserverTargeting;
var counter = 1;

for (var option in bidSet){
    var key = bidSet[option].key;
    console.log("DFP BIDDING KV #" + counter + ": " + key);
    counter++;
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
               var timedOut = "No";
               if (b.timeToRespond > pbjsTimeout) {
                 timedOut = "Yes";
               };
               if (b.bidder === 'audienceNetwork'){
                output.push({
                'bidder': b.bidder, 'adunit': adunit, 'sizes': b.size, 'format': b.fb_format, 'placementId': b.fb_placementid, 'adId': b.adId, 'bidId': b.fb_bidid,
                'time': b.timeToRespond, 'timedout': timedOut, 'bid': b.pbHg, 'status': b.statusMessage
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
console.log('%c<----- Auctions By AdUnit ----->', 'color: cyan; font-weight: bold;');

var responses = pbjs.getBidResponses();

for (var adunit in responses){
  var output = [];
  if (responses.hasOwnProperty(adunit)) {
    console.log(' ');
    console.log('AdUnit: ' + adunit);
    var bids = responses[adunit].bids;
    for (var i = 0; i < bids.length; i++) {
      var b = bids[i];
      output.push({
      'adunit': adunit, 'sizes': b.size, 'adId': b.adId, 'bidder': b.bidder,
      'time': b.timeToRespond, 'cpm': b.pbHg, 'msg': b.statusMessage
      });
    };
    if (output.length) {
        if (console.table) {
            console.table(output);
        } else {
            for (var j = 0; j < output.length; j++) {
                console.log(output[j]);
            }
        }
    } else {
        console.warn('No Bids For AdUnit: ' + adunit);
    }
  };
};


console.log(" ");
console.log(" ");
console.log('%c<----- All Audience Network Bids With Undefined Sizes ----->', 'color: cyan; font-weight: bold;');

var responses = pbjs.getBidResponses();
var output = [];
for (var adunit in responses) {
    if (responses.hasOwnProperty(adunit)) {
        var bids = responses[adunit].bids;
        for (var i = 0; i < bids.length; i++) {
               var b = bids[i];
               if (b.size === undefined && b.bidder === 'audienceNetwork'){
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
    console.warn('No Audience Network Bids With Undefined Size');
}


console.log(" ");
console.log(" ");
console.log('%c<----- Winning Bidders ----->', 'color: cyan; font-weight: bold;');

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
    console.warn('No prebid winners, all slots went to Direct Sold');
}

console.log(" ");
console.log(" ");
console.log('%c<----- Prebid.js & Audience Network Debug END ----->', 'color: magenta; font-weight: bold;');
