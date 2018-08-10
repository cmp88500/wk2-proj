$(document).ready(function() {
  $('button#btn').click(function() {
  $('form#stack').submit(function(event) {
    event.preventDefault();
    var questionOne=$("#questionOne option:selected").val();
    console.log(questionOne);
  });
});
});
