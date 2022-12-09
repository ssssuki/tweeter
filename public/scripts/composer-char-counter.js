$(document).ready(function () {
  // --- our code goes here ---

  $("#tweet-text").on("input", function () {

    let counter = $(this).parent().find(".counter");
    counter.text(140 - $(this).val().length);
    if ($(this).val().length > 140) {
      counter.css('color', 'red');
    } else {
      counter.css('color', '#545149');
    }
  });
})


