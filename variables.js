//variables
//we can declare variables using var and let
//the difference between them is that var is function scoped and let is block scoped. Variable declared by let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted.
let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!
console.log(hello);
console.log(message);

/*var a = 2;
console.log(a);

var a = 4;
console.log(a);

var a = 2;
console.log(a); */

let mess;

mess = 'Hello!';

mess = 'World!'; // value changed

alert(mess);

//alert() stops all interaction with the browser until the message is dismissed while console. log() just prints the message to the console.

//////

//swap variables
  function test() {
  var a = "3";
  var b = "8";

  var temp = a;
  var a = b;
  var b = temp;

  console.log("a is " + a);
  console.log("b is " + b);
}

test();
