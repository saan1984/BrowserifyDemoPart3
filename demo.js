var myScript = require("./my-script.js")
    result1 = myScript.addTwoNumbers(3,2),
    result2 = myScript.makeSquare(9),
    result3 = myScript.sayHello("Sandeep");

console.log("Exported methods are: ",myScript);
console.log("Addition of 3 and 2: ", result1);
console.log("Square of 9: ", result2);

console.log("SayHello method returns: ", result3);