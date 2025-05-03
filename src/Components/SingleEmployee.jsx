import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleEmployee = () => {

    let [ singleEmpData, setSingleEmployeeData ] = useState({});
    let {id} = useParams();

    let getEmployee = async ()=>{

        let {data} = await axios.get(`http://localhost:3000/Employee/${id}`);
        console.log(data);
        setSingleEmployeeData(data);
    }


    useEffect( ()=>{
        getEmployee()
    }, [] )
    

    return (
        <div className='main_card_container'>
            <div className='cards'>

                <h1>{`${singleEmpData?.fn}`}</h1>
                <h1>{`${singleEmpData?.ln}`}</h1>
                <h2>{`${singleEmpData.email}`}</h2>
                <h2>{`${singleEmpData.mob}`}</h2>

            </div>

        </div>
    );
}

export default SingleEmployee;
