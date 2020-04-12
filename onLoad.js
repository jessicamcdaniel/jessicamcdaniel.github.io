function setCopyrightText() {
	
	startYear = 2019;

	element = document.getElementById("copyright");

	if (element == null) {
		return;
	}

	var currentYear = new Date().getFullYear();
	var copyrightText = "<p>&copy; " + startYear.toString();

	if (currentYear > startYear) {
		copyrightText += " - " + currentYear.toString();
	}
	copyrightText +=  " Jessica McDaniel. All rights reserved.</p>";

	element.innerHTML = copyrightText
}

//Credit to Simon Willison for the idea behind this!

function addLoadEvent(func) {
	var oldOnLoad = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function() {
			if (oldOnLoad) {
				oldOnLoad();
			}
			func();
		}
	}
}

addLoadEvent(setCopyrightText);