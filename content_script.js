var elements = document.getElementsByTagName('*');

var replaceThis1;
var replaceThis2;
var replaceThis3;
var replaceThis4;
var replaceThis5;

var replaceWith1;
var replaceWith2;
var replaceWith3;
var replaceWith4;
var replaceWith5;

chrome.storage.sync.get([
 'replaceThis1',
 'replaceThis2',
 'replaceThis3',
 'replaceThis4',
 'replaceThis5',
 'replaceWith1',
 'replaceWith2',
 'replaceWith3',
 'replaceWith4',
 'replaceWith5'
], function(result) {
	
	replaceThis1=result.replaceThis1;
	replaceThis2=result.replaceThis2;
	replaceThis3=result.replaceThis3;
	replaceThis4=result.replaceThis4;
	replaceThis5=result.replaceThis5;
	
	replaceWith1=result.replaceWith1;
	replaceWith2=result.replaceWith2;
	replaceWith3=result.replaceWith3;
	replaceWith4=result.replaceWith4;
	replaceWith5=result.replaceWith5;
	
	re1 = new RegExp(`\\b${replaceThis1}\\b`, 'i');
	re2 = new RegExp(`\\b${replaceThis2}\\b`, 'i');
	re3 = new RegExp(`\\b${replaceThis3}\\b`, 'i');
	re4 = new RegExp(`\\b${replaceThis4}\\b`, 'i');
	re5 = new RegExp(`\\b${replaceThis5}\\b`, 'i');


if (replaceThis1 !== ""){
	for (var i = 0; i < elements.length; i++) {
			var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if (node.nodeType === 3) {
				var text = node.nodeValue;
				var replacedText = text.replace(re1, String(replaceWith1));

				if (replacedText !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}

if (replaceThis2 !== ""){
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
	
		for (var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if (node.nodeType === 3) {
				var text = node.nodeValue;
				var replacedText = text.replace(re2, String(replaceWith2));

				if (replacedText !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}

if (replaceThis3 !== ""){
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if (node.nodeType === 3) {
				var text = node.nodeValue;
				var replacedText = text.replace(re3, String(replaceWith3));

				if (replacedText !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}


if (replaceThis4 !== ""){
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if (node.nodeType === 3) {
				var text = node.nodeValue;
				var replacedText = text.replace(re4, String(replaceWith4));

				if (replacedText !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}


if (replaceThis5 !== ""){
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if (node.nodeType === 3) {
				var text = node.nodeValue;
				var replacedText = text.replace(re5, String(replaceWith5));

				if (replacedText !== text) {
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}




});

