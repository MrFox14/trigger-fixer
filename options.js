
var replaceThisCommaDel = ",";
var replaceWithCommaDel = ",";


chrome.storage.sync.get([
    'replaceThis',
    'replaceWith'
], function(result) {

    if (result.replaceThis !== undefined){replaceThisCommaDel = String(result.replaceThis)};
		
    if (result.replaceWith !== undefined){replaceWithCommaDel = String(result.replaceWith)};
	
	
    console.log(replaceThisCommaDel);
    console.log(replaceWithCommaDel);


    document.getElementById("submit").addEventListener("click", submitClicked);


    function submitClicked() {

        var replaceThis = String(document.getElementById("replaceThis").value);
        var replaceWith = String(document.getElementById("replaceWith").value);


        console.log(replaceThis);
        console.log(replaceWith);

        replaceThisCommaDel = replaceThisCommaDel + replaceThis + ",";
        replaceWithCommaDel = replaceWithCommaDel + replaceWith + ",";

        console.log(replaceThisCommaDel);
        console.log(replaceWithCommaDel);

        chrome.storage.sync.set({
            'replaceThis': replaceThisCommaDel
        })
        chrome.storage.sync.set({
            'replaceWith': replaceWithCommaDel
        })



    }
});