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