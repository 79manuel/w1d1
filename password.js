var args = process.argv.slice(2);

function obfuscate(password){
  var string = password.replace(/a/g, "4");
  string = string.replace(/e/g, "3");
  string = string.replace(/o/g, "0");
  string = string.replace(/l/g, "1");

  return string;
}

console.log(obfuscate(args[0]));