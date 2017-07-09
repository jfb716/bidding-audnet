console.clear();
console.group('%c<----- Prebid.js & Audience Network Debug START ----->', 'color: magenta; font-weight: bold;');
console.log(" ");
console.groupCollapsed('%c<----- Wrapper Info ----->', 'color: cyan; font-weight: bold;');
console.log(" ");
console.log("Domain: " + pbjs.publisherDomain);
console.log("Version: " + pbjs.version);
if (typeof(PREBID_TIMEOUT) === "number"){
  var pbjsTimeout = PREBID_TIMEOUT;
 console.log("Timeout: " + pbjsTimeout);
} else {
  var pbjsTimeout = 0;
}
console.log(" ");

if (pbjs.bidderSettings.standard.adserverTargeting) {

  var bidSet = pbjs.bidderSettings.standard.adserverTargeting;

}

var counter = 1;

for (var option in bidSet){
    var key = bidSet[option].key;
    console.log("DFP BIDDING KV #" + counter + ": " + key);
    counter++;
}
console.groupEnd();
console.log(" ");
console.log(" ");
console.groupCollapsed('%c<----- All Audience Network Bids ----->', 'color: cyan; font-weight: bold;');

var responses = pbjs.getBidResponses();
var output = [];
for (var adunit in responses) {
    if (responses.hasOwnProperty(adunit)) {
        var bids = responses[adunit].bids;
        for (var i = 0; i < bids.length; i++) {
               var b = bids[i];
               var timedOut = "No";
               if (pbjsTimeout === 0) {
                 timedOut = "Timeout Info N/A";
               } else if (b.timeToRespond > pbjsTimeout) {
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
console.groupEnd();
console.log(" ");
console.log(" ");
console.group('%c<----- Auctions By AdUnit ----->', 'color: cyan; font-weight: bold;');

var responses = pbjs.getBidResponses();

for (var adunit in responses){
  var bids = pbjs._winningBids;
  var output = [];
  var slotWinner = "Direct Sold";
  var winColor = "red";

  if (responses.hasOwnProperty(adunit)) {
    console.log(' ');
    for (var i = 0; i < bids.length; i++) {
        var b = bids[i];
        if (b.adUnitCode === adunit) {
          slotWinner = b.bidder;
        }
        if (slotWinner === "audienceNetwork") {
          winColor = "green";
        }
    };
    console.groupCollapsed("AdUnit: %c" + adunit + "%c    Winner: %c" + slotWinner, "color: black; font-weight: bold; background-color: cyan; padding: 2px; text-transform: uppercase;", " " , "color: black; font-weight: bold; background-color: " + winColor + "; padding: 2px; text-transform: uppercase;");
    var bids = responses[adunit].bids;
    for (var i = 0; i < bids.length; i++) {
      var b = bids[i];
      if (b.statusMessage === "Bid available") {
        output.push({
        'adunit': adunit, 'sizes': b.size, 'adId': b.adId, 'bidder': b.bidder,
        'time': b.timeToRespond, 'cpm': b.pbHg, 'msg': b.statusMessage
        });
      };
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
    console.groupEnd();
  };
};

console.groupEnd();
console.log(" ");
console.log(" ");
console.groupCollapsed('%c<----- All Audience Network Bids With Undefined Sizes ----->', 'color: cyan; font-weight: bold;');

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

console.groupEnd();
console.log(" ");
console.log(" ");
console.groupCollapsed('%c<----- Winning Bidders ----->', 'color: cyan; font-weight: bold;');

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
console.groupEnd();
console.log(" ");
console.log(" ");
console.log('%c<----- Prebid.js & Audience Network Debug END ----->', 'color: magenta; font-weight: bold;');
console.groupEnd();
