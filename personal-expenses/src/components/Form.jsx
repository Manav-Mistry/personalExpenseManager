import React from 'react'
import Card from './shared/Card'
import { useContext, useState } from 'react'
import userContext from '../context/userContext'
import "../style/registerform.css"
import Button from './shared/Button'
import axios from 'axios'

function Form() {
  const { nameRef, handleUserName } = useContext(userContext);
  const { emailRef, handleEmail } = useContext(userContext);
  const { passRef, handlePassword } = useContext(userContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);

    try {
      const url = "http://localhost:5000/expenseBuddy/users/";
      const resp = await axios.post(url, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passRef.current.value
      })
      localStorage.setItem("token", respToken.data.token)
      const tokenUrl = "http://localhost:5000/expenseBuddy/users/me"
      const respToken = await axios.get(tokenUrl, {
        headers:{
          "authorization" : `Bearer ${localStorage.getItem("token")}`
        }
      })
    } catch (error) {
      
    }

  }
  return (
    <div className='form d-flex justify-content-center align-item-center'>
      <div className='form-heading p-4'>Register</div>
      <Card>
        <form className='register-form'>
          <div className='d-flex justify-content-center'>
            <div className='container'>
              <input ref={nameRef} type='text' name='username'
                placeholder='Name' 
                onChange={(e) => handleUserName(e)}
              />

              <input ref={emailRef} type='email' name='useremail'
                placeholder='Email'
                onChange={(e) => handleEmail(e)}
              />

              <input ref={passRef} type='password' name='userpassword'
                placeholder='Password'
                onChange={(e) => handlePassword(e)}
              />

              <div className='d-flex justify-content-between'>
                <Button btnType="button" btnColorStyle="texted" btnSize="small" >Login</Button>

                <input className="primary small" type="submit" value="Submit"  onClick={(e) => handleSubmit(e)}/>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>

  )
}

export default Form