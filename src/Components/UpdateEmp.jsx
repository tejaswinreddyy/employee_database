import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmp = () => {

    let [state, setState] = useState({
        fn: "",
        ln: "",
        email: "",
        mob: "",
        age: "",
        gender: "",
        password: "",
        cpassword: "",
      });

    let navigate = useNavigate();

    let getEmployee = async ()=>{

        let {data} = await axios.get(`http://localhost:3000/Employee/${localStorage.getItem("e_id")}`);
        console.log(data);
        setState(data)
    }

    let [error, setError] = useState({});

  let handleUpdate = (e) => {
    e.preventDefault();
    console.log(state);
    axios.put(`http://localhost:3000/Employee/${localStorage.getItem("e_id")}`, state);
    setError(validateForm(state));
    setState({
        fn: "",
        ln: "",
        email: "",
        mob: "",
        age: "",
        gender: "",
        password: "",
        cpassword: "",
      })
      navigate("/emplist");
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // ! validation ===============

  let isValidEmail = (email) => {
    let emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    return emailRegex.test(email);
  };

  let isPhoneValid = (mob) => {
    let phoneRegex = /^\+?[1-9][0-9]{7,14}$/;
    return phoneRegex.test(mob);
  };

  let isvalidAge = (age) => {
    return age >= 18 && age <= 100;
  };

  let isValidpassword = (password) => {
    let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  let validateForm = (state) => {
    console.log(state);
    let error = {};

    if (!state.fn) {
      error.fn = "please enter your fname";
    }

    if (!state.ln) {
      error.ln = "please enter your last name";
    }

    if (!state.email) {
      error.email = "please enter your email";
    } else if (!isValidEmail(state.email)) {
      error.email = "please enter correct email address";
    }

    if (!state.age) {
      error.age = "please select your age";
    } else if (!isvalidAge(state.age)) {
      error.age = "age is not valid";
    }

    if (!state.mob) {
      error.mob = "please enter your mobile number";
    } else if (!isPhoneValid(state.mob)) {
      error.mob = "number is not valid";
    }

    if (!state.password) {
      error.password = "please enter your password";
    } else if (!isValidpassword(state.password)) {
      error.password = "password is not valid";
    }

    if (!state.cpassword) {
      error.cpassword = "please enter your confirm password";
    } else if (state.password !== state.cpassword) {
      error.cpassword = "password does not matched";
    }

    console.log(error);
    return error;
  };

  let { fn, ln, email, age, gender, mob, password, cpassword } = state;



    useEffect( ()=>{
            getEmployee()
        }, [] )

    return (
        <div className="form_main_container">
        <form action="" onSubmit={handleUpdate}>
          <div>
            <h1>Update Employee</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="enter your first name"
              name="fn"
              value={fn}
              onChange={handleChange}
            />
            <div>{error && <div>{error.fn}</div>}</div>
          </div>
          <div>
            <input
              type="text"
              placeholder="enter your last name"
              name="ln"
              value={ln}
              onChange={handleChange}
            />
            <div>{error && <div>{error.ln}</div>}</div>
          </div>
          <div>
            <input
              type="text"
              placeholder="enter your email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <div>{error && <div>{error.email}</div>}</div>
          </div>
          <div>
            <input
              type="tel"
              placeholder="enter your number"
              name="mob"
              value={mob}
              onChange={handleChange}
            />
            <div>{error && <div>{error.mob}</div>}</div>
          </div>
          <div>
            <input
              type="number"
              placeholder="enter your age"
              name="age"
              value={age}
              onChange={handleChange}
            />
            <div>{error && <div>{error.age}</div>}</div>
          </div>
          <div>
            <input
              type="password"
              placeholder="enter your password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <div>{error && <div>{error.password}</div>}</div>
          </div>
          <div>
            <input
              type="password"
              placeholder="enter your confirm password"
              name="cpassword"
              value={cpassword}
              onChange={handleChange}
            />
            <div>{error && <div>{error.cpassword}</div>}</div>
          </div>
          <div>
            <button type="submit">submit</button>
            <button type="reset">cancel</button>
          </div>
        </form>
      </div>
    );
}

export default UpdateEmp;
