$(document).ready(function() {
  $('.readmore').click(function() {
    $('#show-this-on-click').slideDown();
    $('.readless').show();
    $('.readmore').hide();
    event.preventDefault();
  });
});

$(document).ready(function() {
  $('.readless').click(function() {
    event.preventDefault();
    // Added this function to 'gate' the hide/show of the
    // buttons. Is there a better way to mess with animation
    // queues/order?
    $('#show-this-on-click').slideUp(function () {
      $('.readless').hide();
      $('.readmore').show();
    });
  });
});

$(document).ready(function() {
  $('.learnmore').click(function() {
    event.preventDefault();
    // Setting the span to a block allows for a cleaner
    // transition when the element is clicked...
    $('.learnmore').css("display", "block");
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
  });
});
