"<h2>One day a [adjective] child wanted to [verb] to see their [noun], but was unable to because of work.</h2>"

var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt("Please type an adjective" + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt("Please type a verb" + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt("Please type a noun" + questionsLeft);
alert("All done! Ready to see your madlib?");

var sentence = "<h2>One day a " + adjective;
sentence += " child wanted to " + verb;
sentence += " to see their " + noun + ", but was unable to because of work.</h2>"

console.log(sentence);
document.write(sentence);
