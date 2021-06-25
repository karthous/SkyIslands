// Script 4 of 5: imageenhance.js. This script enlarges the images in response to users' clicking the images.
$(function(){
    // Remind users that images can be clicked
    $("img").mouseover(function(){
        $(this).css("cursor","pointer");
    });

    // Change the display style if an image is clicked
    $("img").click(function(){
        $(this).toggleClass('min');
        $(this).toggleClass('max');
    });
});