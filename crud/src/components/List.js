import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/employees')
    .then(({data}) => {
      setEmployees(data)
    })
    .catch((error) => {
      console.log(error)
    });
  }, [])
  
  const deleteEmployee = (id) => {
    axios.delete('http://localhost:5000/employees/delete-employee/'+id)
    .then(res => {
      if(res.status === 200){
          alert('Employee Deleted Successfully');
          window.location.reload();
      }
      else
      {
          alert('Something Wrong')
      }
     })
  }

  return <>
  <h4 className="text-center">Employee Details</h4>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Company</th>
      <th scope="col">Salary</th>
      <th colSpan = "2" className="text-center">Action</th>
    </tr>
  </thead>
  <tbody>
    {
    employees.data && employees.data.map((item, index) => {
       return(
        <tr key= {index}>
          <td scope="row">{item.name}</td>
          <td>{item.email}</td>
          <td>{item.company}</td>
          <td>{item.salary}</td>
          <td><Link to = {"/edit/" + item._id}>Edit</Link></td>
          <td><Link onClick={() => deleteEmployee(item._id)}>Delete</Link></td>
        </tr>
       ) 
    })
    }
    
  </tbody>
</table>
  </>;
}

export default List;
