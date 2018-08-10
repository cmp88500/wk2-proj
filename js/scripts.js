$(document).ready(function() {
  $('button#btn').click(function() {
  $('form#stack').submit(function(event) {
    event.preventDefault();
    var questionOne=$("#questionOne option:selected").val();
    var questionTwo=$("#questionTwo option:selected").val();
    var questionThree=$("#questionThree option:selected").val();
    var questionFour=$("#questionFour option:selected").val();
    var questionFive=$("#questionFive option:selected").val();
    console.log(questionOne);
    console.log(questionTwo);
    console.log(questionThree);
    console.log(questionFour);
    console.log(questionFive);
  });
});
});
