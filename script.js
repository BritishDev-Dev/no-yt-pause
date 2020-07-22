// Script by Michelle W. (World Legion)
// Add jQuery (Needed)
var jQuery = document.createElement('script');
jQuery.src = "https://code.jquery.com/jquery-3.5.1.js"
document.body.append(jQuery);

// Run the check every second (Feel free to edit delay)
setInterval(function() {
  if($(".yt-confirm-dialog-renderer").is(":visible")) { // Check for box
    $(".style-blue-text").click(); // Press the "yes" button
  }
}, 1000);
