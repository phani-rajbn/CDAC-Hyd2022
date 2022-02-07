import React, { Component } from 'react';
import Employee from './Employee';

export default class App extends Component {
  state = {
    employees :[]
  }

  //This function gets invoked when the Component is loaded into the Browser.
  componentDidMount(){
      fetch("http://localhost:1234/Employees")
      .then(res => res.json())
      .then((data)=> {
        this.setState({ employees : data})
      })
      .catch(console.log);
  }
  render() {
    const empList = this.state.employees.map((e) => <Employee emp = {e}/>);
    return empList;
  }
}
 
