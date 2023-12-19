import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import validation from './signupValidation.jsx';
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
const StyledSelect= styled.select`
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
function Signup(){
    const [values, setValues]= useState({
        firstName:'',
        LastName:'',
        birthDate:'',
        email:'',
        password:'',
        country:'',
        termsAndConditions:false
    })
    const navigate= useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    function handleSubmit (event) {
        event.preventDefault();
        setErrors(validation(values));
        {/*if(errors.firstName === "" && errors.lastName === "" && errors.birthDate === "" && errors.email === "" && errors.password === "" && errors.country === ""){*/}
            console.log(values);
            axios.post(https://konnecct-server.onrender.com/signup', values)
            .then(res => 
                {
                    console.log(res);
                    navigate('/signin')}    
            )
            .catch(err => console.log(err));
                }
    {/*}*/}
    return(
        <StyledSignup>
            <StyledForm><h2 className='form-title' >Sign Up</h2>
            <form onSubmit={handleSubmit} name='signup'>
                    <label htmlFor='firstName'>First Name</label><br/>
                    <StyledInput 
                        type='text' 
                        name='firstName'
                        placeholder='Enter First Name' 
                        onChange={handleInput}
                    /><br/>
                    {errors.firstName && <><TextDanger>{errors.firstName}</TextDanger><br/></>}
                    
                    <label htmlFor='lastName'>Last Name</label><br/>
                    <StyledInput 
                        type='text' 
                        name='lastName'
                        placeholder='Enter Last Name'
                        onChange={handleInput}
                     /><br/>
                     {errors.lastName && <><TextDanger>{errors.lastName}</TextDanger><br/></>}
                     
                     <label htmlFor='birthdate'>Date of birth</label><br/>
                     <StyledInput 
                        type='date' 
                        name='birthdate'
                        onChange={handleInput}
                     /><br/>
                     {errors.birthdate && <><TextDanger>{errors.birthdate}</TextDanger><br/></>}
                    
                    <label htmlFor='email'>Email Adress</label><br/>
                    <StyledInput 
                        type='email'   
                        name='email' 
                        placeholder='Enter Email'
                        onChange={handleInput}    
                    /><br/>
                    {errors.email && <><TextDanger>{errors.email}</TextDanger><br/></>}
                    
                    <label htmlFor='password'>Password</label><br/>
                    <StyledInput 
                        type='password' 
                        name='password'
                        placeholder='Enter Password'
                        onChange={handleInput}    
                    /><br/>
                    {errors.password && <><TextDanger>{errors.password}</TextDanger><br/></>}
                   
                    <label htmlFor='country'>Country</label><br/>
                    <StyledSelect  
                        name='country'
                        placeholder='Select Country'
                        onChange={handleInput}
                    > 
                        <option value="">Select your country</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Congo">Congo</option>
                        <option value="Egypt">Egypt</option>
                        <option value="France">France</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="India">India</option>
                        <option value="Italy">Italy</option>
                        <option value="Ivory Coast">Ivory Coast</option>
                        <option value="Japan">Japan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Mali">Mali</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Russia">Russia</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Viet Nam">Viet Nam</option>
                    </StyledSelect><br/>
                    {errors.country && <><TextDanger>{errors.country}</TextDanger><br/></>}
                    <input 
                        type='checkbox' 
                        name='termsAndConditions' 
                        onChange={handleInput}
                    /><label htmlFor='termsAnsConditions'>I accept terms and conditions</label><br/>
                    {errors.termsAndConditions && <><TextDanger>{errors.termsAndConditions}</TextDanger><br/></>}
                    <StyledButton type='submit'>Submit</StyledButton>
                </form>
                Already have an acount? <Link to ='/signin'>Sign in</Link></StyledForm>
               </StyledSignup>

    )
}

export default Signup;
