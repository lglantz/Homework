// Waits till Dom is loaded
$('#submit-btn').click(function() {
  // Prevents the button press from submitting
  event.preventDefault();
  // Defines a var of the user input
  var cityRaw = $('#city-type').val();
  // Transforms the input into a standard format
  var city = (cityRaw).toLowerCase();
  // Compares city to pre-set values
  if (city === 'nyc' || city === 'new york' || city === 'new york city') {
    $('body').addClass('nyc');
  }
  else if (city === 'san francisco' || city ===  'sf' || city ===  'bay area' || city === 'the bay area') {
    $('body').addClass('sf');
  }
  else if (city === 'los angeles' || city ===  'la' || city ===  'lax') {
    $('body').addClass('la');
  }
  else if (city === 'austin' || city ===  'atx') {
    $('body').addClass('austin');
  }
  else if (city === 'sydney' || city ===  'syd') {
    $('body').addClass('sydney');
  }
  // Resets the image to skyline if the input doesn't match a preset value
  else {
    $('body').removeClass();
  /* Add code to do error handleing when we learn how



  */
  }
});
