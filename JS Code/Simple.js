//These are the different ways of creating functions in JS..
//regular way of creating function...
//What is a function, variable, const, classes and objects. 
//JS does not support any specific data type as such, but it internally holds
//various kinds of data. 
//JS internally identifies string, number, object, undefined and null.
//All variables in JS are declared as var or let. let is more specific so better use them.
function addFunc(v1, v2) {
    console.log(typeof(v1) + ":v1\t" + typeof(v2) + ":v2")
    return parseFloat(v1) + parseFloat(v2);
}


//Anonymous method of JS...
let subFunc = function (v1, v2){
    return v1 - v2;
}

//new in ES 6 called as Lambda Expressions. 
let mulFunc = (v1, v2) => v1 * v2; //Arraw or Lambda Operator or Goes To operator


