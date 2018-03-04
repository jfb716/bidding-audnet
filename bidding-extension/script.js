function fireTool(){
  console.clear();
  console.log('%c<-- START -->', 'color: white; font-weight: bold;');
  console.group(' -- Prebid & Audiene Network -- ');
  var responses = pbjs.getBidResponses();
  console.log(responses);

  console.groupEnd();
  console.log('%c<-- FINISH ----->', 'color: white; font-weight: bold;');
};


var y = "<button class=\"toolButton\" onclick=\"fireTool()\">Print Bidding to Console</button>";

var z = "<style>.toolButton{height:50px\; width: 100px\;position: fixed; z-index:1000000; top: 0; right:0; background-color: black; border: 1px solid red; color: white}</style>";

document.body.innerHTML += y + z;
