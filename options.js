



	var replaceThis1 = document.getElementsByName("replaceThis1").value;
	var replaceWith1 = document.getElementsByName("replaceWith1").value;
	
	var replaceThis2 = document.getElementsByName("replaceThis2").value;
	var replaceWith2 = document.getElementsByName("replaceWith2").value;
	
	var replaceThis3 = document.getElementsByName("replaceThis3").value;
	var replaceWith3 = document.getElementsByName("replaceWith3").value;
	
	var replaceThis4 = document.getElementsByName("replaceThis4").value;
	var replaceWith4 = document.getElementsByName("replaceWith4").value;
	
	var replaceThis5 = document.getElementsByName("replaceThis5").value;
	var replaceWith5 = document.getElementsByName("replaceWith5").value;
	
	console.log(replaceThis1);
	
	chrome.storage.sync.set({'replaceThis1': replaceThis1})
	chrome.storage.sync.set({'replaceThis2': replaceThis2})
	chrome.storage.sync.set({'replaceThis3': replaceThis3})
	chrome.storage.sync.set({'replaceThis4': replaceThis4})
	chrome.storage.sync.set({'replaceThis5': replaceThis5})
	
	chrome.storage.sync.set({'replaceWith1': replaceWith1})
	chrome.storage.sync.set({'replaceWith2': replaceWith2})
	chrome.storage.sync.set({'replaceWith3': replaceWith3})
	chrome.storage.sync.set({'replaceWith4': replaceWith4})
	chrome.storage.sync.set({'replaceWith5': replaceWith5})
