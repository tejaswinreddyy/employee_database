import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Employeelist = () => {

    let [empList, setEmpList] = useState([]);

    let navigate = useNavigate();

    let getEmpData = async ()=> {

        let {data} = await axios.get("http://localhost:3000/Employee");
        console.log(data);
        setEmpList(data)

    }

    useEffect(()=>{
        getEmpData()
    
    },[])

    let handleDelete = (id)=>{
        axios.delete(`http://localhost:3000/Employee/${id}`)
        getEmpData();
    }

    let veiwSingleEmp = (id) =>{
        navigate(`/emp/${id}`)
    }

    let updateEmployee = (id) =>{
        localStorage.setItem("e_id", id)
        navigate("/update");
    }

    return (
        <div className='main_card_container'>
            {empList.map((ele, i)=>{
                console.log(ele);
                return(
                    <div className='cards' key={i}>
                         <h1>{ele.fn}</h1>
                         <h2>{ele.ln}</h2>
                         <button className='view_btn' onClick={()=>{veiwSingleEmp(ele.id)}}>View</button>
                         <button className='update_btn' onClick={()=>{updateEmployee(ele.id)}}>Update</button>
                         <button className='delete_btn' onClick={()=>{handleDelete(ele.id)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Employeelist;
