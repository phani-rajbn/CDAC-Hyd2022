module.exports.developedBy = "Phaniraj"
module.exports.developedOn = new Date()//Gives the current date. 

class testClass{
    testfunc(){
        console.log("test Func is called using ES6")
    }
}
module.exports.myClass = testClass;
module.exports.simpleFunc = function(){
    console.log("Simple Function thru a Module")
}
module.exports.oldClass = (function(){
    function testFunc(){
        console.log("testFunc from old syntax")
    }
    return{
        testFunc
    }
})();

//Modules exported by a name is called as Named modules. There can be anonymous modules. 
