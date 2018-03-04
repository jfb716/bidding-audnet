var output = output || [];
var myBidIds = myBidIds || [];
function fireTool(){
  console.clear();
  console.log('%c<-- START -->', 'color: white; font-weight: bold;');
  console.group(' -- Audience Network -- ');




  var responses = pbjs.getBidResponses();

  for (var adunit in responses) {
      if (responses.hasOwnProperty(adunit)) {
          var bids = responses[adunit].bids;
          for (var i = 0; i < bids.length; i++) {
                 var b = bids[i];
                  if (b.bidder === 'audienceNetwork' && myBidIds.indexOf(b.adId) === -1){
                    anBidsCount += 1;
                    output.push({
                    'bidder': b.bidder, 'adunit': adunit, 'sizes': b.size, 'format': b.fb_format, 'placementId': b.fb_placementid, 'adId': b.adId, 'bidId': b.fb_bidid, 'bid': b.pbHg, 'status': b.statusMessage
                    });

                    myBidIds.push(b.adId);
                  }
          }
      }
  }

  if (typeof ADNW === 'object') {
    var anWinsCount = ADNW.v55.ads.length;
  } else {
    var anWinsCount = 0;
  }
  var anBidsCount = output.length;

  console.log("Audience Network Bids: " + anBidsCount);
  console.log("Audience Network Wins: " + anWinsCount);

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
  console.log('%c<-- FINISH ----->', 'color: white; font-weight: bold;');
};


var y = "<button class=\"toolButton\" onclick=\"fireTool()\">Print Bidding to Console</button>";

var z = "<style>.toolButton{height:50px\; width: 100px\;position: fixed; z-index:10000000000; top: 0; right:0; background-color: #3B5998; color: white; font-size: 12px; border-radius: 20px; padding: 5px; font-weight: bold; white-space:normal; text-shadow: 0 1px 3px rgba(0,0,0,.4); border: 2px solid white;}button:focus {outline:0;}</style>";

document.body.innerHTML += y + z;
