// Waits till Dom is loaded
$('#submit-btn').click(function() {
  // Prevents the button press from submitting
  event.preventDefault();
  // Remove error text (if any)
  $('#error-text').text("");
  // Defines a var of the user input
  var city = $('#city-type').val().toLowerCase();
  // Compares city to pre-set values
  if (city === 'nyc' || city === 'new york' || city === 'new york city') {
    $('body').removeClass();
    $('body').addClass('nyc');
  }
  else if (city === 'san francisco' || city ===  'sf' || city ===  'bay area' || city === 'the bay area') {
    $('body').removeClass();
    $('body').addClass('sf');
  }
  else if (city === 'los angeles' || city ===  'la' || city ===  'lax') {
    $('body').removeClass();
    $('body').addClass('la');
  }
  else if (city === 'austin' || city ===  'atx') {
    $('body').removeClass();
    $('body').addClass('austin');
  }
  else if (city === 'sydney' || city ===  'syd') {
    $('body').removeClass();
    $('body').addClass('sydney');
  }
  // Resets the image to skyline if the input doesn't match a preset value
  else {
    $('body').removeClass();
    $('#error-text').text("You must enter a valid city");
  }
});
