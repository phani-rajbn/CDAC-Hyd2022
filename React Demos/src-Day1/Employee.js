import React from 'react';

export default function Employee({emp}) {
  return( 
  <div>
    <h2>{emp.empId}</h2>
    <p>{emp.empName}</p>     
    <p>{emp.empAddress}</p>     
    <p>{emp.empSalary}</p>     
  </div>
  )
}
