# Prebid.js &amp; Audience Network Debug Tool

> Implementation Steps :computer:

* Copy all lines of code from js file [here](https://github.com/jfb716/bidding-audnet/blob/master/prebid-audnet-debug-tool/prebid_audNet_debugTool.js)
* Open Chrome Dev Tools
* Click on the “Sources” Tab
* Click on “Snippets” (could be under more options button)
* Click on “+ New Snippet”

![alt text](/prebid-audnet-debug-tool/images/snippet_setup.png)

* Name the Snippet (ie “Prebid.js & Audience Network Debug Tool”)
* Paste the code into the box on the right of your New Snippet
* Right click on the code you just pasted and click “Save”
* Visit any webpage With Prebid.js & Audience Network, after the page completes the auction, open up chrome dev tools and navigate to Sources :fast_forward: Snippets and right click your new snippets Name and click “Run”

> Section Breakdown :scroll:

* **Audience Network** - this is all the info for our bids, i've included other columns here like format (so we can see fullwidth or native), bid id, and placement id.  
* **All 320x50's** - This is all the info for all bidders mapped to a 320x50 size on the page
* **All 300x250's** - This is all the info for all bidders mapped to a 300x250 size on the page (our fullwidth and native would show up here)
* **All Bids With Undefined Sizes** - this info is all bidders not mapped to a size (which is probably a problem)
* **All Bidders / All Sizes** - this is an aggregation of all the bids on the page
* **Winning Bidders for All Sizes** - this is all the winners for each ad slot on the page
* **Full Details for All Bidders** - this is the entire prebid.js bid response object printed out so you can dig into it if necessary (you can see our tag and the exact key values being sent to DFP)

> Example Screenshot :mag:

![alt text](images/example_output.png)
