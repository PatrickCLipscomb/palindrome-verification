$(document).ready(function() {
  $('form#blanks').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#pali').val();
    var output = [];
    for ( var index = 0; index < userInput.length; index += 1) {
      if ( userInput[index] === ' ') {
        output.splice(index, 1);
      } else {
        output.push(userInput[index]);
      }
    }

    var putout = output.slice();
    var putout = putout.reverse();
    var answernew = putout.join(' ');
    var answerold = output.join(' ');

    if ( answernew === answerold ) {
      $('.answertrue').text("This is a palindrome");
      $('.pali').text(answernew);
    } else if ( answernew !== answerold) {
      $('.answerfalse').text('Unfortunately, this is jibberish');
      $('.pali').text(answernew);
    } else {
      console.log();
    }
    $('#blanks').hide();
  });
});
