function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default
    $(".tabcontent").hide();
  
    // Remove the background color of all tablinks/buttons
    $(".tablink").css("background-color", "");
  
    // Show the specific tab content
    $("#" + pageName).show();
  
    // Add the specific color to the button used to open the tab content
    $(elmnt).css("background-color", color);
  }

  