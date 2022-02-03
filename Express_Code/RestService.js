const app = require("express")();//get the app instance.
const mongodb = require("mongodb").MongoClient;//interface of MongoDB in Nodejs. 
const parser = require("body-parser");
const dir = __dirname;

app.use(parser.urlencoded({"extended": true}));//U R defining the format of the body when posted. 
app.use(parser.json());//JSON format is what it is using...

let db;

getConnection = () =>{
    const url = "mongodb://localhost/HydDB";
    let mc = mongodb.connect(url, (err, res)=>{
        if(err!= null){
            console.error(err.message)
            return;
        }
        db = res.db("HydDB");
    })
}
getConnection();//Call this once and only once during the app execution....

//REST APIS
app.get("/Employees", (req, res)=>{
    db.collection("employees").find().toArray((e, result)=>{
        if(e != null) console.error(e.message); 
        res.send(result);
    })
})

app.get("/Employees/:id", (req, res)=>{
    const id = parseInt(req.params.id);//Extracting the id of the Query string...
    db.collection("employees").find({"empId": id}).toArray((e, result)=>{
        res.send(result)
    })
})
//Used to add a record to the REST service....
app.post("/Employees", (req, res)=>{
    let rec = req.body;
    db.collection("employees").insert(rec);
    res.send("Employee inserted successfully")    
})
//updating the existing record is done for PUT...
app.put("/Employees", (req, res)=>{
    let rec = req.body;
    console.log(rec);
    db.collection("employees").update({"empId": rec.empId}, {$set:{'empName' : rec.empName, 'empAddress': rec.empAddress, 'empSalary' : rec.empSalary}})
    res.send("Employee updated to the database")
})

app.delete("/Employees/:id", (req, res)=>{
    const id = parseInt(req.params.id);//Extracting the id of the Query string...
    db.collection("employees").remove({"empId": id});
    res.send(`Employee by id ${id} deleted successfully`)
})

app.get("/EmployeeUI", (req, res)=> res.sendFile(dir + "/UIApp.html"));

app.listen(1234, ()=>{
    console.log("Server is available at http://localhost:1234");
})