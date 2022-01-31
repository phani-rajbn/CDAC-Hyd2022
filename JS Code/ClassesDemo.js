//Entity class that represents the data of a real world entity...
class Employee{
    constructor(id, name, address){
        this.empId = id
        this.empName = name;
        this.empAddress = address
    } 
}

// let obj = new Employee(123, "Phaniraj", "Bangalore")//Creating an instance in JS
// console.log(obj.toString())//object info
// console.log(JSON.stringify(obj)) //Convert the object to JSON data
// localStorage.setItem("Data",JSON.stringify(obj) ) //Saving the data into a browser.   
//SOLID Principles of OOP.
//A Class is closed for modification but open for extension.

class EmpManager{
    //CURD operations for a collection...
    data =[
        new Employee(111, "Phaniraj", "Bangalore"),
        new Employee(112, "Alok", "Indore"),
        new Employee(113, "Nithin", "Latur"),
        new Employee(114, "Sangharsh", "Nagpur"),
        new Employee(115, "Naveen", "Kurnool"),
    ];//create a blank array..
    addEmployee(emp){
        this.data.push(emp)//adds the object to the bottom of the list...
    }

    updateEmployee(emp){
        let foundRec = this.data.find((e)=>e.empId == emp.empId);
        foundRec.empName = emp.empName;
        foundRec.empAddress = emp.empAddress;
    }
    
    getAllEmployees(){
        return this.data;
    }

    
    deleteEmployee(id){
        // let foundRec = this.data.find((e)=>e.empId == id);
        // let index = this.data.indexOf(foundRec);
        // this.data.splice(index, 1);
        for (let index = 0; index < this.data.length; index++) {
            if(this.data[index].empId == id){
                this.data.splice(index, 1)//Splice method removes the record(s) from the index to the no of elements passed as 2nd arg.
                return;
            }
        }
        throw "No record found to delete" //throwing exceptions in JS....
        //splice is one method that can be used to add, remove or replace.
    }
    //JS is one of the most powerfull programming languages in the planet!!!!!! 
}

