function pigLatin(word) {
  var string = word.substr(1) + word.substr(0, 1) + "ay";
  return string;
}

var input = process.argv
for (var x = 2; x < input.length; x++) {
  console.log(pigLatin(input[x]));
}