import React, { Fragment, useState } from 'react';

export default function NewRec() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [address, setAddress] = useState("");
    const [salary, setSalary] = useState("");
  
    let onsubmit = async(e) =>{
        debugger;
        e.preventDefault();
        let res = await fetch("http://localhost:1234/Employees", {
            method: 'POST', 
            body : JSON.stringify({
                empId: id, empName :name, empAddress: address, empSalary : salary 
            }),
        })
    }
    
    return <Fragment>
            <form onSubmit={onsubmit}>
                <input type="number" value={id} placeholder='Enter the ID' onChange={(e) => setId(e.target.value)} />
                <input type="text" value={name} placeholder='Enter the Name' onChange={(e) => setName(e.target.value)} />
                <input type="text" value={address} placeholder='Enter the Address' onChange={(e) => setAddress(e.target.value)} />
                <input type="text" value={salary} placeholder='Enter the Salary' onChange={(e) => setSalary(e.target.value)} />
                <button>Add New user</button>
            </form>
        </Fragment>
};

