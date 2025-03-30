function updateActiveTab() {
    const selector = $(".hori-selector");
    const activeItem = $('#navbarSupportedContent .nav-item.active');
    selector.stop().animate({
      "left": activeItem.position().left + "px",
      "width": activeItem.outerWidth() + "px"
    }, 400); // Smooth animation for selector movement
  }
  
  $(document).ready(function () {
    updateActiveTab();
    $("#navbarSupportedContent").on("click", "li", function () {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      updateActiveTab();
    });
  
    $(window).on('resize', function () {
      setTimeout(updateActiveTab, 150); // Small delay to ensure correct positioning after resize
    });
  });
  