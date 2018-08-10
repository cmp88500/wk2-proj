$(document).ready(function() {
  $('button#btn').click(function() {
  $('form#stack').submit(function(event) {
    event.preventDefault();
    var questionOne=$("#questionOne option:selected").val();
    var questionTwo=$("#questionTwo option:selected").val();
    var questionThree=$("#questionThree option:selected").val();
    var questionFour=$("#questionFour option:selected").val();
    var questionFive=$("#questionFive option:selected").val();
    var score = parseInt(questionOne) + parseInt(questionTwo) + parseInt(questionThree) + parseInt(questionFour) + parseInt(questionFive);
    $("#stack").fadeOut();
    console.log(score);

    if (score >= 13){
      $("#net").fadeIn();
    } else if (score <= 12 && score >= 8){
      $("#ruby").fadeIn();
    } else {
      $("#css").fadeIn();
    }
  });
});
});
