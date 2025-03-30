function updateActiveTab() {
    const tabs = $('#navbarSupportedContent');
    const activeItem = tabs.find('.active');
    const selector = $(".hori-selector");
  
    const itemPos = activeItem.position();
    const topOffset = 10;
    selector.css({
      top: itemPos.top + topOffset + "px",
      left: itemPos.left + "px",
      width: activeItem.innerWidth() + "px",
      height: activeItem.innerHeight() - topOffset + "px"
    });
  }
  
  $(document).ready(function () {
    updateActiveTab();
    $("#navbarSupportedContent").on("click", "li", function () {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      updateActiveTab();
    });
  });
  
  $(window).on('resize', function () {
    setTimeout(updateActiveTab, 500);
  });
  
  $(document).ready(function () {
    const path = window.location.pathname.split("/").pop() || 'index.html';
    const target = $(`#navbarSupportedContent ul li a[href="${path}"]`);
    target.parent().addClass('active');
  });
  