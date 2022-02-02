const os = require('os');
//Os module is used to get info about the OS U R running...
const util = require('util')

console.log("The OS of this machine is " + os.type());
console.log("The OS version of this machine is " + os.version());
console.log("The Name of this machine is " + os.hostname());
const duration = (os.uptime() /3600);
console.log("The machine was up and running for " + duration +" hrs")
console.log(`The machine has ${os.cpus().length} in it`)
console.log(`The machine has ${os.cpus()[0].model} in it`)
console.log(`The machine has ${os.totalmem()} in it`)

//Util is used to handle string utilities...
const city ="Bangalore"
const age = 45
const name= "Phaniraj"
const msg = util.format("My Name is %s from %s and I am %d years old", name, city, age)
console.log(msg);

console.table([
    {Name: "Phaniraj", Address: "Bangalore", Salary: 56000},
    {Name: "Phaniraj", Address: "Bangalore", Salary: 56000},
    {Name: "Phaniraj", Address: "Bangalore", Salary: 56000},
    {Name: "Phaniraj", Address: "Bangalore", Salary: 56000},
    {Name: "Phaniraj", Address: "Bangalore", Salary: 56000}
])