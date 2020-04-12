function setUpGallery() {
	var gallery = document.getElementById("gallery");
	var modal = document.getElementById("modal");
	var modalImage = document.getElementById("modalImage");
	var modalCaption = document.getElementById("caption");

	if (!gallery || !modal || !modalImage || !modalCaption) {
		return;
	}

	var images = document.getElementById("gallery").getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].onclick = function() {
			modal.style.display = "block";
			modalImage.setAttribute("src", this.getAttribute("src"));
			modalCaption.innerHTML = this.getAttribute("alt");
		}
	}
	document.getElementsByClassName("close")[0].onclick = function() { 
		modal.style.display = "none";
	}
}

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
addLoadEvent(setUpGallery);