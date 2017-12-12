"<h2>One day a [adjective] child wanted to [verb] to see their [noun], but was unable to because of work.</h2>"

var adjective = prompt("Please type an adjective");
var verb = prompt("Please type a verb");
var noun = prompt("Please type a noun");
alert("All done! Ready to see your madlib?");

var sentence = "<h2>One day a " + adjective;
sentence += " child wanted to " + verb;
sentence += " to see their " + noun + ", but was unable to because of work.</h2>"

console.log(sentence);
document.write(sentence);
