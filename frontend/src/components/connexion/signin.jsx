import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from'./loginValidation';
import styled from 'styled-components';
import axios from 'axios';

const StyledSignup = styled.div`
    background-color: #4287f5;
    width: 100%;
    height: 1000px;
    padding: 30px;
    justify-content: center;
    align-items: center;
    @font-family: 'Epilogue-light';
    .form-title {
        @font-family: 'Epilogue-bold';
    }
`
const StyledForm= styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    Height: 600px;
    margin: auto;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 15px #000;
    background: #e4f5f0;
`
const StyledInput= styled.input`
    border-radius: 5px;
    border: 1px solid grey;
    margin-bottom: 3px;
    padding: 5px;
    width: 260px;
`
const TextDanger= styled.span`
    color: red;
    font-size: 0.6em;
`
const StyledButton= styled.button`
    background-color: #42f5c2;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 5px;
    cursor: pointer;
    width:150px;
`

function Signin(){
    const [values, setValues]= useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('https://konnecct-server.onrender.com')
    .then(res => {
      if(res.data.valid){
        navigate('/home')
      }else{
        navigate('/signin')
      }
    })
    .catch(err => console.log(err))
  },[navigate])


    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values))
            axios.post('https://konnecct-server.onrender.com/signin', values)
            .then(res => {
                if(res.data.Login){
                    navigate('/home')
                }else{
                    alert("There's no user with this email or password")
                }
        })
            .catch(err => console.log(err));
    }
    
    return(

<StyledSignup>
<StyledForm><h2>Sign In</h2>
        <form name='signin' onSubmit={handleSubmit}>
            <label>Email Adress</label><br/>
            <StyledInput 
                type='email' 
                name='email' 
                onChange={handleInput}
            /><br/>
            {errors.email && <><TextDanger>{errors.email}</TextDanger><br /></>}
            <label>Password</label><br/>
            <StyledInput 
                type='password' 
                name='password' 
                onChange={handleInput}
            /><br/>
            {errors.password && <><TextDanger>{errors.password}</TextDanger><br/></>}
            <StyledButton type='submit'>Sign In</StyledButton>
        </form>
        You don't have an acount? <Link to ='/signup'>Sign up now</Link></StyledForm></StyledSignup>
    )
}

export default Signin;
