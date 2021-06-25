// Script 5 of 5: checkform.js. This script checks whether users enter their name into the form.
function checkForm(){
    var formError = false;
    var name = document.getElementById("form-name");
    if(name.value == "") {
        formError = true;
    }
    
    // If users does not enter their name into the form, an alert message would display.
    if(formError == true) {
        alert("You should enter your name before submission");
        return false;
    }
}