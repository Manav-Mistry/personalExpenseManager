import React from 'react'
import Card from './shared/Card'
import "../style/registerform.css"
import Button from './shared/Button'
import axios from 'axios'
import {useState} from "react"
import { Link, useNavigate } from 'react-router-dom'
import Form from './Form'

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
        const url = "http://localhost:5000/expenseBuddy/users/login";
        const resp = await axios.post(url, {           
            email: email,
            password: password
        })
        localStorage.setItem("token", resp.data.token)

        // const tokenUrl = "http://localhost:5000/expenseBuddy/users/me"
        // const respToken = await axios.get(tokenUrl, {
        //     headers:{
        //     "authorization" : `Bearer ${localStorage.getItem("token")}`
        //     }
        // })
        navigate("/")
        } catch (error) {
        
        }


  }
  return (
    <div className='form d-flex justify-content-center align-item-center'>
      <div className='form-heading p-4'>Login</div>
      <Card>
        <form className='register-form'>
          <div className='d-flex justify-content-center'>
            <div className='container'>              

              <input type='email' name='useremail'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />

              <input type='password' name='userpassword'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className='d-flex justify-content-between'>
                <Link to="/Form">
                    <Button btnType="button" btnColorStyle="texted" btnSize="small" >Register</Button>
                </Link>
                <input className="primary small" type="submit" value="Login"  onClick={(e) => handleSubmit(e)}/>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>

  )
}

export default Login