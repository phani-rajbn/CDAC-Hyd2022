const mongodb = require('mongodb').MongoClient;//Get the reference of MongoClient. 
const dbUrl = 'mongodb://localhost/HydDB'//Location of the database. 

let database;

mongodb.connect(dbUrl, (err, mgCl)=>{
    database = mgCl.db("HydDB")//aquire the database available in the location. 
    database.collection("employees").find().toArray((err, res)=>{
        res.forEach((value)=> console.log(`${value.empName} from ${value.empAddress}`))
    })
})
