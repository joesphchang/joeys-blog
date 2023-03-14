import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='login-container'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' />
        <input required type="email" placeholder='email' />
        <input required type="password" placeholder='password' />
        <button>Register</button>
        <p>This is an error!</p>
        <span>Don't you have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Register