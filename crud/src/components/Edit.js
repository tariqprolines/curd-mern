import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const param = useParams();
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        name:'',
        email:'',
        company:'',
        salary:'',
    })

    //Load Data from Server

    useEffect(() => {
        axios.get(`http://localhost:5000/employees/update-employee/${param.id}`)
        .then((res) => {
            const {name, email, company, salary} = res.data
            setInputValue({name,email,company,salary})
        })
        .catch((err) => console.log(err));
    }, [])
    

    const handleInput = (e) =>{
        setInputValue({...inputValue,[e.target.name]:e.target.value});
    }
    const updateSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: inputValue.name,
            email: inputValue.email,
            company: inputValue.company,
            salary: inputValue.salary
        }
        axios.put(`http://localhost:5000/employees/update-employee/${param.id}`,data)
        .then(res => {
            if(res.status === 200){
                alert('Employee Updated Successfully')
                navigate('/')
            }else{
                alert('somthing wrong.')
            }
        })
    }
  return (
    <div className="row mt-5">
      <h4>Edit Employee Information</h4>
      <form onSubmit = {updateSubmit} className="border p-2">
          <div>
              <label>Name</label>
              <input type="text" name="name" value={inputValue.name} onChange = {handleInput} className="form-control" />
          </div>
          <div>
              <label>Email</label>
              <input type="text" name="email" value={inputValue.email} onChange = {handleInput} className="form-control" />
          </div>
          <div>
              <label>Company</label>
              <input type="text" name="company" value={inputValue.company} onChange = {handleInput} className="form-control" />
          </div>
          <div>
              <label>Salary</label>
              <input type="text" name="salary" value={inputValue.salary} onChange = {handleInput} className="form-control" />
          </div>
          <div>
            <button type='submit' className='btn btn-primary mt-2'>Update</button>
          </div>
        </form>  
    </div>
  )
}

export default Edit