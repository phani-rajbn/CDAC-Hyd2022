const express = require('express')
const parser = require('body-parser')//To parse the posted data sent by Form method.

const app = express();
const root = __dirname;

app.use(parser.urlencoded({extended: false})) //This statement makes the app to use the parser and process the req object and create a body object.

app.get("/", (req, res)=> res.send("Testing a simple app!!!"))

app.get("/Home", (req, res) => res.sendFile(root + "/HomePage.html"))

app.get("/Registration", (req, res) => res.sendFile(root + "/Registration.html"))

//Unlike http, U dont need a query parse like httpParser to extract querystring info....
app.get("/AfterRegistration", (req, res)=>{
   const name = req.query.txtName;
   const email = req.query.txtEmail;
   const sal = req.query.txtSalary;
   res.send(`${name} can be contacted at ${email} and is available for a salary of ${sal}`);
})

//handler for POST forms. use body parser to get the body
app.post("/AfterRegistration", (req, res)=>{
    console.log(req);
    // if(req.body == undefined){
    //     res.send("Body parser is not included")
    //     return;
    // }
    // if(req.body == null){
    //     res.send("No data is posted")
    // }else{
    //     const name = req.body.txtName;
    //     const email = req.body.txtEmail;
    //     const sal = req.body.txtSalary;
    //     res.send(`${name} can be contacted at ${email} and is available for a salary of ${sal}`);
    // }
})


app.listen(1234, () => console.log("Server is avaialble at 1234"))