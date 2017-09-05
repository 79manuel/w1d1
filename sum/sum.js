var args = process.argv.slice(2);
var x = new Number(args[0]);
var y = new Number(args[1]);

console.log(x + y);



 // var myArgs = process.argv.slice(2);
 // console.log('myArgs: ' + myArgs);

var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
 case 'insult':
   console.log(myArgs[1], 'smells quite badly.');
   break;
 case 'compliment':
   console.log(myArgs[1], 'is really cool.');
   break;
 default:
   console.log('Sorry, that is not something I know how to do.');
}