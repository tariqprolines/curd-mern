import React,{useState} from "react";
import axios from "axios";

function Create() {
    const [inputValue, setinputValue] = useState({
        name:'',
        email:'',
        company:'',
        salary:'',
    });
    
    const handleInput = (e) =>{
        e.persist();
        setinputValue({...inputValue,[e.target.name]:e.target.value});
    }
    const createSubmit = (e) =>{
        e.preventDefault();
        const data = {
            name:inputValue.name,
            email:inputValue.email,
            company:inputValue.company,
            salary:inputValue.salary
        }
       if(data.name !== '' || data.email !== '' || data.company !== '' || data.salary !== ''){
        axios.post('http://localhost:5000/employees/create-employee',data)
        .then(res => {
         if(res.status === 200){
             alert('Employee Created Successfully');
             window.location.reload();  
         }
         else
         {
             alert('Something Wrong')
         }
        })
       }
       else{
        alert('All fields are mandatory.')
       }
    }
  return <>
      <h4>Add New Employee Information</h4>
      <form onSubmit = {createSubmit} className="border p-2">
          <div>
              <label>Name</label>
              <input type="text" name="name" onChange = {handleInput} value={inputValue.name} className="form-control" />
          </div>
          <div>
              <label>Email</label>
              <input type="email" name="email" onChange = {handleInput} value={inputValue.email} className="form-control" />
          </div>
          <div>
              <label>Company</label>
              <input type="text" name="company" onChange = {handleInput} value={inputValue.company} className="form-control" />
          </div>
          <div>
              <label>Salary</label>
              <input type="text" name="salary" onChange = {handleInput} value={inputValue.salary} className="form-control" />
          </div>
          <div>
              <button type="submit" className="btn btn-primary mt-2">Submit</button>
          </div>
      </form>
  </>;
}

export default Create;
