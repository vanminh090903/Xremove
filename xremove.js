// ==UserScript==
// @name         remove element v2
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        *://twitter.com/*
// @match        *://x.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        const newHtml = `<div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><div aria-label="13 Replies. Reply" role="button" tabindex="0" class="css-175oi2r r-1777fci r-1ceczpf r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l" data-testid="reply"></div></div><div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><div aria-expanded="false" aria-haspopup="menu" aria-label="139 reposts. Repost" role="button" tabindex="0" class="css-175oi2r r-1777fci r-1ceczpf r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l" data-testid="retweet"></div></div><div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><div aria-label="8467 Likes. Like" role="button" tabindex="0" id="change" class="css-175oi2r r-1777fci r-1ceczpf r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l" data-testid="like"></div></div><div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><div aria-label="290 Bookmarks. Bookmark" role="button" tabindex="0" class="css-175oi2r r-1777fci r-1ceczpf r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l" data-testid="bookmark"></div></div><div class="css-175oi2r" style="transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px); justify-content: inherit; display: inline-grid;"><div class="css-175oi2r r-18u37iz r-1h0z5md"><div aria-expanded="false" aria-haspopup="menu" aria-label="Share post" role="button" tabindex="0" class="css-175oi2r r-1777fci r-1ceczpf r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"></div></div></div>`

let observer = new MutationObserver(mutations => {

  for(let mutation of mutations) {
    // examine new nodes, is there anything to highlight?

    for(let node of mutation.addedNodes) {



      if (!(node instanceof HTMLElement)) continue;

        if (location.href.includes("status")) {
   for(let elem of node.getElementsByTagName('a[target="_blank"]')) {
if (!elem.href.includes("twitter.com")) {
						console.log(elem.href)
    	elem.href = "https://twitter.com/";
					}

   }
        }

        //////////////////////////
			var anchors = document.getElementsByTagName("a");
			for (var i = 0; i < anchors.length; i++) {
				// Kiểm tra xem thẻ a có thuộc tính target="_blank" hay không
				if (anchors[i].getAttribute("target") === "_blank") {
					if (!anchors[i].href.includes("twitter.com")) {
						console.log(anchors[i].href)
					}
					anchors[i].href = "https://twitter.com/";
				}
			}

        //relaod page
 const xpathResult = document.evaluate('//span//span[text()="Retry"]', node, null, XPathResult.ANY_TYPE, null);
          const matchingElement = xpathResult.iterateNext();
          if (matchingElement) {
           location.reload();
               console.log("relaod");
          }

        // follow
        if (!location.href.includes("status") && !location.href.includes("https://twitter.com/home") && !location.href.includes("https://twitter.com/search")) {


   for(let elem of node.querySelectorAll('[data-testid="UserProfileHeader_Items"]')) {


let elem1 = node.querySelector('[data-testid="placementTracking"]')

if (!elem1.querySelector("[data-testid='19583545-follow']")) {
setInterval(function(){
  elem1.innerHTML = ""
       elem1.innerHTML = `<div class="css-175oi2r r-1cad53l" id="chnage" style="min-width: 96px;"><div aria-describedby="id__ya5bowc96ci" aria-label="Follow @LFC" role="button" tabindex="0" class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-1kr1oia r-4fabwj r-1atloto r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l" data-testid="19583545-follow" style="border-color: rgba(0, 0, 0, 0); background-color: rgb(239, 243, 244);"><div dir="ltr" class="css-1rynq56 r-bcqeeo r-qvutc0 r-1qd0xha r-q4m81j r-1i10wst r-135wba7 r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style="text-overflow: unset; color: rgb(15, 20, 25);"><span class="css-1qaijid r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-poiln3 r-1i10wst r-135wba7" style="text-overflow: unset;"><span class="css-1qaijid r-bcqeeo r-qvutc0 r-poiln3" style="text-overflow: unset;">Follow</span></span></div></div></div>`
       console.log("innerHTML follow.");
},1000);

}

   }}

        //cmt
      if (location.href.includes("status")) {
     for(let elem of node.querySelectorAll('[data-testid="toolBar"]')) {


setInterval(function(){
   if(!elem.querySelector("div[data-testid='tweetButtonInline']").id){
   console.log("innerHTML cmt")
            //   div.remove()
			elem.innerHTML = ""
            elem.innerHTML = `<div class="css-175oi2r r-1awozwy r-yfoy6g r-18u37iz r-1wtj0ep r-13qz1uu r-184en5c" data-testid="toolBar"><nav aria-live="polite" role="navigation" class="css-175oi2r r-1awozwy r-18u37iz r-156q2ks r-13awgt0 r-1imd94c"><div class="css-175oi2r r-1awozwy r-1ro0kt6 r-18u37iz r-16y2uox r-1pi2tsx r-1ny4l3l"><div class="css-175oi2r r-5f2r5o r-u8s1d r-184en5c r-orgf3d r-633pao" data-testid="ScrollSnap-prevButtonWrapper"><div aria-disabled="true" aria-label="Previous" role="button" tabindex="-1" class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-1kr1oia r-4fabwj r-o7ynqc r-6416eg r-icoktb r-1ny4l3l" style="background-color: rgba(15, 20, 25, 0.75); border-color: rgba(0, 0, 0, 0); backdrop-filter: blur(4px);"><div dir="ltr" class="css-1rynq56 r-bcqeeo r-qvutc0 r-1qd0xha r-q4m81j r-1i10wst r-135wba7 r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style="text-overflow: unset; color: rgb(255, 255, 255);"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1472mwg r-lrsllp r-bk3u0n"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg><span class="css-1qaijid r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-poiln3 r-1i10wst r-135wba7" style="text-overflow: unset;"></span></div></div></div><div class="css-175oi2r r-1adg3ll r-16y2uox r-1wbh5a2 r-1pi2tsx" data-testid="ScrollSnap-SwipeableList" style="overflow: hidden;"><div role="tablist" class="css-175oi2r r-18u37iz r-16y2uox r-1wbh5a2 r-tzz3ar r-1pi2tsx r-buy8e9 r-mfh4gg r-2eszeu r-hbs49y r-lltvgl r-1p4rafz r-1vvnge1" data-testid="ScrollSnap-List" style="scroll-padding: 0px 43px;"><div role="presentation" class="css-175oi2r r-6b64d0 r-cpa5s6"><div class="css-175oi2r r-1pi2tsx r-1777fci"><div aria-label="Add photos or video" role="button" tabindex="0" class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-1y2ygd2 r-mvpalk r-1kr1oia r-4fabwj r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l" style="background-color: rgba(0, 0, 0, 0); border-color: rgba(0, 0, 0, 0);"><div dir="ltr" class="css-1rynq56 r-bcqeeo r-qvutc0 r-1qd0xha r-q4m81j r-1i10wst r-135wba7 r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style="text-overflow: unset; color: rgb(255, 212, 0);"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1472mwg r-lrsllp" style="color: rgb(255, 212, 0);"><g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path></g></svg><span class="css-1qaijid r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-poiln3 r-1i10wst r-135wba7" style="text-overflow: unset;"></span></div></div><input accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime" multiple="" tabindex="-1" type="file" class="r-8akbif r-orgf3d r-1udh08x r-u8s1d r-xjis5s r-1wyyakw" data-testid="fileInput"></div></div><div role="presentation" class="css-175oi2r r-6b64d0 r-cpa5s6"><div aria-label="Add a GIF" role="button" tabindex="0" class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-1kr1oia r-4fabwj r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l" data-testid="gifSearchButton" style="background-color: rgba(0, 0, 0, 0); border-color: rgba(0, 0, 0, 0);"><div dir="ltr" class="css-1rynq56 r-bcqeeo r-qvutc0 r-1qd0xha r-q4m81j r-1i10wst r-135wba7 r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style="text-overflow: unset; color: rgb(255, 212, 0);"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1472mwg r-lrsllp" style="color: rgb(255, 212, 0);"><g><path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path></g></svg><span class="css-1qaijid r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-poiln3 r-1i10wst r-135wba7" style="text-overflow: unset;"></span></div></div></div><div role="presentation" class="css-175oi2r r-6b64d0 r-cpa5s6"></div><div role="presentation" class="css-175oi2r r-6b64d0 r-cpa5s6"><div class="css-175oi2r"><div aria-haspopup="menu" aria-label="Add emoji" role="button" tabindex="0" class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-136ojw6 r-1kr1oia r-4fabwj r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l" style="background-color: rgba(0, 0, 0, 0); border-color: rgba(0, 0, 0, 0);"><div dir="ltr" class="css-1rynq56 r-bcqeeo r-qvutc0 r-1qd0xha r-q4m81j r-1i10wst r-135wba7 r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style="text-overflow: unset; color: rgb(255, 212, 0);"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1472mwg r-lrsllp" style="color: rgb(255, 212, 0);"><g><path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path></g></svg><span class="css-1qaijid r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-poiln3 r-1i10wst r-135wba7" style="text-overflow: unset;"></span></div></div></div></div><div role="presentation" class="css-175oi2r r-6b64d0 r-cpa5s6"></div><div role="presentation" class="css-175oi2r r-6b64d0 r-cpa5s6"><div aria-disabled="true" aria-label="Tag Location" role="button" tabindex="-1" class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-1kr1oia r-4fabwj r-o7ynqc r-6416eg r-icoktb r-1ny4l3l" data-testid="geoButton" style="background-color: rgba(0, 0, 0, 0); border-color: rgba(0, 0, 0, 0);"><div dir="ltr" class="css-1rynq56 r-bcqeeo r-qvutc0 r-1qd0xha r-q4m81j r-1i10wst r-135wba7 r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style="text-overflow: unset; color: rgb(255, 212, 0);"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1472mwg r-lrsllp" style="color: rgb(255, 212, 0);"><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path></g></svg><span class="css-1qaijid r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-poiln3 r-1i10wst r-135wba7" style="text-overflow: unset;"></span></div></div></div><div role="presentation" class="css-175oi2r r-6b64d0 r-cpa5s6"></div><div role="presentation" class="css-175oi2r r-6b64d0 r-cpa5s6"></div></div></div><div class="css-175oi2r r-5f2r5o r-u8s1d r-184en5c r-zchlnj r-orgf3d r-633pao" data-testid="ScrollSnap-nextButtonWrapper"><div aria-disabled="true" aria-label="Next" role="button" tabindex="-1" class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-1kr1oia r-4fabwj r-o7ynqc r-6416eg r-icoktb r-1ny4l3l" style="background-color: rgba(15, 20, 25, 0.75); border-color: rgba(0, 0, 0, 0); backdrop-filter: blur(4px);"><div dir="ltr" class="css-1rynq56 r-bcqeeo r-qvutc0 r-1qd0xha r-q4m81j r-1i10wst r-135wba7 r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style="text-overflow: unset; color: rgb(255, 255, 255);"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1472mwg r-lrsllp r-bk3u0n"><g><path d="M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z"></path></g></svg><span class="css-1qaijid r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-poiln3 r-1i10wst r-135wba7" style="text-overflow: unset;"></span></div></div></div></div></nav><div class="css-175oi2r r-1awozwy r-18u37iz r-156q2ks"><div aria-disabled="true" id="chnage" role="button" tabindex="-1" class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-ltgprq r-1kr1oia r-4fabwj r-1atloto r-o7ynqc r-6416eg r-icoktb r-1ny4l3l" data-testid="tweetButtonInline" style="background-color: rgb(255, 212, 0); border-color: rgba(0, 0, 0, 0);"><div dir="ltr" class="css-1rynq56 r-bcqeeo r-qvutc0 r-1qd0xha r-q4m81j r-1i10wst r-135wba7 r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style="text-overflow: unset; color: rgb(255, 255, 255);"><span class="css-1qaijid r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-poiln3 r-1i10wst r-135wba7" style="text-overflow: unset;"><span class="css-1qaijid r-bcqeeo r-qvutc0 r-poiln3" style="text-overflow: unset;">Reply</span></span></div></div></div></div>`

}

},1000);

     }

      }

      // or maybe there's a code snippet somewhere in its subtree?
      for(let elem of node.querySelectorAll('div[role*="group"]')) {


		// Duyệt qua từng thẻ div và xoá nó khỏi DOM


           if(!elem.querySelector("[data-testid='like']").id)
           {
               setInterval(function(){
     console.log("innerHTML like")
               // div.remove()
			elem.innerHTML = ""
           elem.innerHTML = newHtml
},500);

           }



      }
    }
  }

});

let demoElem = document.querySelectorAll("div[role*='group']")

observer.observe(document.body, {childList: true, characterData: true, subtree: true});

// Sử dụng sự kiện hashchange


})();
