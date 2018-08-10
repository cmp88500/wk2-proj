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

    if (score >= 13){
      $("#net").show();
    } else if (score < 13 && score >= 8){
      $("#ruby").show();
    } else {
      $("#css").show();
    }
  });
});
});
