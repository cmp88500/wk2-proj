$(document).ready(function() {
  $('button#quest').click(function() {
    $('#start').fadeOut();
    $('.buttonMain').fadeOut();
    $('#stack').fadeIn();
  });

  $('button#btn').click(function() {
  $('form#stack').submit(function(event) {
    event.preventDefault();
    var mathQuestion=$("#mathQuestion option:selected").val();
    var enjoyQuestion=$("#enjoyQuestion option:selected").val();
    var artQuestion=$("#artQuestion option:selected").val();
    var personality=$("#personality option:selected").val();
    var complexQuestion=$("#complexQuestion option:selected").val();
    var score = parseInt(mathQuestion) + parseInt(enjoyQuestion) + parseInt(artQuestion) + parseInt(personality) + parseInt(complexQuestion);
    $("#stack").fadeOut();
    console.log(score);

    if (score >= 13){
      $("#net").fadeIn();
      $('button#refresh').fadeIn();
    } else if (score <= 12 && score >= 8){
      $("#ruby").fadeIn();
      $('button#refresh').fadeIn();
    } else {
      $("#css").fadeIn();
      $('button#refresh').fadeIn();
    }

    $('button#refresh').click(function() {
      location.reload();

    });
    });
  });
});

//location.reload = https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery
