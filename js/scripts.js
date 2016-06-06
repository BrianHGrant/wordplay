var userSentenceWords = [];
var jumbleWords = [];
var result;
$(document).ready(function() {

  $('#jumbler').submit(function() {
    userSentenceWords = $("#sentence").val().split(" ");
    userSentenceWords.forEach(function(word) {
      if (word.length > 3) {
        jumbleWords.push(word);
      }
    });
    result = jumbleWords.reverse().join(" ");
    $("#result h2").text(result);
    event.preventDefault();
  });
});
