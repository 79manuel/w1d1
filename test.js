var conceptList = ["gists", "types", "operators", "iteration", "problem solving"]
var joinList = concepts(conceptList);


function concepts(items) {
  var string = "";
  for (var i = 0; i < items.length; i++) {
    if (i != items.length - 1){
      string += items[i] + ", ";
    } else {
      string += items[i];
    }
  }
  return string;
}

console.log("Today I learned about " + joinList + ".");

var emptyArray = [];
console.log(concepts(emptyArray));