var args = process.argv.slice(2);

function obfuscate(password){
  var string = "";
  for (i = 0; i < password.length; i++) {
    if(password[i] === "a"){
      string += "4";
    } else if (password[i] === "e") {
      string += "3"
    } else if (password[i] === "o") {
      string += "0"
    } else if (password[i] === "l") {
      string += "1";
    } else{
      string += password[i];
    }
  }
  return string;
}

console.log(obfuscate(args[0]));