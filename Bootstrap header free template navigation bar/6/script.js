// jQuery for enhanced interaction
$(document).ready(function() {
    // Fade effects for navigation links
    $('.nav-link, .navbar-brand').hover(
      function() { // Mouse enter
        $(this).fadeTo('fast', 0.8); // Slightly dim element
      }, function() { // Mouse leave
        $(this).fadeTo('fast', 1); // Restore element
      }
    );
  
    // Slide in effect for navbar collapse on toggle
    $('.navbar-toggler').on('click', function() {
      $('.navbar-collapse').slideToggle('slow'); // Toggle slide for navbar collapse
    });
  });
  