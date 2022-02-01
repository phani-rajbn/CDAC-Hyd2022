//readline is a nodejs module that allows users to take inputs from the console and display the result.
const rl = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout
});

module.exports = function(statement, resFunc){//resFunc is the callback function. 
    rl.question(statement, (answer)=>{
        rl.close();
        return resFunc(answer);
    })
}
//question("What is UR Name", (res) => console.log(res));