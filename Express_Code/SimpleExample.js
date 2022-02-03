const express = require('express')//loads the express module to the App...

const app = express();//Creates an Application

const root  = __dirname;

app.get("/", (req, res)=> res.send("Testing a simple app!!!"))

app.get("/Home", (req, res) => res.sendFile(root + "/HomePage.html"))

app.get("/Registration", (req, res) => res.sendFile(root + "/Registration.html"))

app.listen(1234, () => console.log("Server is up and running at 1234"));

/*
Steps for creating and working Express app
Create a folder based on the AppName U want to create. 
Create a package.json using command npm init -y which gives U default file.
Install express in ur dir by using a command: npm install express --save.
Now Continue with UR App creation.  
*/