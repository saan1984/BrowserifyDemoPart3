(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var myScript = require("./my-script.js")
    result1 = myScript.addTwoNumbers(3,2),
    result2 = myScript.makeSquare(9),
    result3 = myScript.sayHello("Sandeep");

console.log("Exported methods are: ",myScript);
console.log("Addition of 3 and 2: ", result1);
console.log("Square of 9: ", result2);

console.log("SayHello method returns: ", result3);
},{"./my-script.js":2}],2:[function(require,module,exports){
//Exporting mulitple items
module.exports={
    //method will be exported
    makeSquare :function(number){
        return number * number;
    },
    //method will be exported
    addTwoNumbers: function(number1,number2){
        return number1+number2;
    }
};
//method will not exported
var findGreatestNumber = function(number1,number2){
    return number1 > number2 ? number1:number2;

}
//Exporting single item
module.exports.sayHello = function(inputText){
   return "Hello "+inputText;
};
},{}]},{},[1]);
