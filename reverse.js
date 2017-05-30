function reverseString(string) {
  var output = "";
  for ( var y = string.length-1; y >= 0; y--) {
    output += string[y];
  }
  return output;
}

var input = process.argv;
  for (var x = 2; x < input.length; x++) {
  console.log(reverseString(input[x]));
}