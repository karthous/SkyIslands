// Script 1 of 5: openpage.js. This script provides manipulation of presentation in response to users' clicking on the subtab.
function openPage(event, pageName) {
	var maincontent, tablinks, i;
	maincontent = document.getElementsByClassName("maincontent");
	tablinks = document.getElementsByClassName("tablinks");

	// Hide main contents
	for (i = 0; i < maincontent.length; i++) {
	maincontent[i].style.display = "none";
	}
	
	// Display the selected content
	for (i = 0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(pageName).style.display = "block";
	event.currentTarget.className += " active";
	}
