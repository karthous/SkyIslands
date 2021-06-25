// Script 2 of 5: backtotop.js. This script enables users to scroll back to the top of the page.
window.onscroll = function(){
	var backtotop = document.getElementById("backtotop");

	// Display the back-to-top button
	backtotop.style.display = "inline";
	
	// Scroll back to the top of the page if the button is clicked
	backtotop.onclick = function(){
		document.documentElement.scrollTop = document.body.scrollTop = 0;
		}
	}