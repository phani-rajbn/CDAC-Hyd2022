//A Module file is Nodejs means that the contents of this file could be refered in other JS files and consumed. 
//A module is exported to the developers and they consume it. 
module.exports = function(num =10){//Default value is 10 if U dont give any value.
    console.log(`Table for ${num} is :`);
    for (let index = 1; index <= 10; index++) {
        console.log(`${num} X ${index} = ${num * index}`)
    }
}
//Now this function is exported. 