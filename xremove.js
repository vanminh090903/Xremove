// ==UserScript==
// @name         remove element
// @namespace    http://tampermonkey.net/
// @version      2024-02-23
// @description  try to take over the world!
// @author       You
// @match        *://twitter.com/*
// @match        *://x.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @updateURL    https://github.com/vanminh090903/Xremove/releases/download/test/Xremove.ja
// @downloadURL  https://github.com/vanminh090903/Xremove/releases/download/test/Xremove.ja
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	console.log("start")
	function remove() {
// Select the div element with aria-label containing "Follow "
const element = document.querySelector('div[aria-label*="Follow "]');

// Check if the element exists
if (element) {
  // Remove the element
  element.remove();
  console.log("Element removed.");
}
		// Lấy tất cả các thẻ div có chứa role="group"
		let divs = document.querySelectorAll("div[role='group']");
		// Duyệt qua từng thẻ div và xoá nó khỏi DOM
		for (let div of divs) {
			console.log("remove div")
			div.remove();
		}
        	if (location.href.includes("status")) {
			var divs2 = document.getElementsByTagName("div");
			for (var i1 = 0; i1 < divs2.length; i1++) {
				// Kiểm tra xem thẻ div có thuộc tính role="progressbar" hay không

				if (divs2[i1].getAttribute("role") === "progressbar") {
					divs2[i1].remove();

					var elementToRemove = document.evaluate(getXPath(divs2[i1]), document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
					if (elementToRemove && elementToRemove.parentNode && divs2[i1] != "/body[1]/div[2]") {
						elementToRemove.parentNode.removeChild(elementToRemove);
						console.log("XPath of the removed div:", getXPath(divs2[i1]));
					}

				}
			}
		}

		// Duyệt qua từng thẻ a
		if (location.href.includes("status")) {
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
		}

	}

	function getXPath(element) {
		var xpath = "";
		for (; element && element.nodeType == 1; element = element.parentNode) {
			var id = element.id;
			if (id) {
				// Nếu có id, sử dụng id
				xpath = '//*[@id="' + id + '"]' + xpath;
				break;
			} else {
				var nodeName = element.nodeName;
				if (nodeName !== "HTML") {
					// Nếu không có id, sử dụng tên thẻ và vị trí
					var position = 1;
					for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
						if (sibling.nodeType == 1 && sibling.nodeName == nodeName) {
							position++;
						}
					}
					xpath = "/" + nodeName.toLowerCase() + "[" + position + "]" + xpath;
				}
			}
		}
		return xpath;
	}
	window.onload = function() {

		console.log("on load")
		remove()
    };
// Lắng nghe sự kiện khi có phần tử mới được thêm vào
document.addEventListener('DOMNodeInserted', (event) => {



		remove()
});


	// Lắng nghe sự kiện scroll của cửa sổ
	window.addEventListener("scroll",
	function() {
		// Lấy tất cả các thẻ div



		remove()

	});

	// Your code here...
})();
