//This program will use multiple data from a single module.
const app = require('./multipleContentModule')
console.log(`This App was developed by ${app.developedBy} on ${app.developedOn}`)

const component = new app.myClass();
component.testfunc();

const oldVersion = app.oldClass
oldVersion.testFunc();

app.simpleFunc();