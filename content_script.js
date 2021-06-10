var elements = document.getElementsByTagName('*');

var replaceThis1;
var replaceThis2;
var replaceThis3;
var replaceThis4;
var replaceThis5;

chrome.storage.sync.get("replaceThis1", function (obj) {
	replaceThis1 = obj;
	console.log(replaceThis1);
	console.log(obj);
});

chrome.storage.sync.get("replaceThis2", function (obj) {
	replaceThis2 = obj;
});

chrome.storage.sync.get("replaceThis3", function (obj) {
	replaceThis3 = obj;
});

chrome.storage.sync.get("replaceThis4", function (obj) {
	replaceThis4 = obj;
});

chrome.storage.sync.get("replaceThis5", function (obj) {
	replaceThis5 = obj;
});

console.log(replaceThis1);
console.log(replaceThis2);
console.log(replaceThis3);
console.log(replaceThis4);
console.log(replaceThis5);

var replaceWith1 = "gra";
var replaceWith2 = "gre";
var replaceWith3 = "gri";
var replaceWith4 = "gro";
var replaceWith5 = "gru";

re1 = new RegExp(`\\b${replaceThis1}\\b`, 'i');
re2 = new RegExp(`\\b${replaceThis2}\\b`, 'i');
re3 = new RegExp(`\\b${replaceThis3}\\b`, 'i');
re4 = new RegExp(`\\b${replaceThis4}\\b`, 'i');
re5 = new RegExp(`\\b${replaceThis5}\\b`, 'i');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(re1, 'gra');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(re2, 'gre');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(re3, 'gri');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(re4, 'gro');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(re5, 'gru');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}