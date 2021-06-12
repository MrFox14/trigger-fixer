var elements = document.getElementsByTagName('*');

var replaceThisWord = "";
var replaceWithWord = "";

var replaceThisCommaDel;
var replaceWithCommaDel;



chrome.storage.sync.get([
 'replaceThis',
 'replaceWith'
], function(result) {
	
	if (result.replaceThis !== undefined){replaceThisCommaDel = result.replaceThis};
	if (result.replaceWith !== undefined){replaceWithCommaDel = result.replaceWith};

	replaceThisCommaDel = replaceThisCommaDel.substring(1);
	replaceWithCommaDel = replaceWithCommaDel.substring(1);
	
	replaceThisCommaDel = replaceThisCommaDel.slice(0, -1);
	replaceWithCommaDel = replaceWithCommaDel.slice(0, -1);

	var replaceThisArr = replaceThisCommaDel.split(',');
	var replaceWithArr = replaceWithCommaDel.split(',');
	
	var length = (replaceThisArr.length);
	
for (i = 1; i < length; i++) {
	
	replaceThisWord = replaceThisArr[i];
	replaceWithWord = replaceWithArr[[i]];
	replaceWords(replaceThisWord, replaceWithWord);
}


function replaceWords(replaceThisText, ReplaceWithText) {
	re = new RegExp(`\\b${replaceThisText}\\b`, 'i');
	if (replaceThisText !== ""){
		for (var i = 0; i < elements.length; i++) {
				var element = elements[i];

			for (var j = 0; j < element.childNodes.length; j++) {
				var node = element.childNodes[j];

				if (node.nodeType === 3) {
					var text = node.nodeValue;
					var replacedText = text.replace(re, String(ReplaceWithText));

					if (replacedText !== text) {
						element.replaceChild(document.createTextNode(replacedText), node);
					}
				}
			}
		}
	}
}

});

