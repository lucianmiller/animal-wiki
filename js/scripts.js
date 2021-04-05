$(document).ready(function() {
  $("form#form").submit(function(event) {
    const animal = $("#animals").val();

    if (animal === "tegu") {
      $('#lizard').show().siblings().hide();
    } else if (animal === "kestrel") {
      $('#bird').show().siblings().hide();
    } else if (animal === "wolf") {
      $('#dog').show().siblings().hide();
    } else {
      $('#info').children().hide();
    }


    event.preventDefault();
  });
});