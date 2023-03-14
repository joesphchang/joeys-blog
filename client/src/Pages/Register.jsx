import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const Register = () => {
  const [ inputs, setInputs ] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [err, setError ] = useState(null);
  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/auth/register", inputs)
      navigate('/login');
    } catch (error) {
      setError(error.response.data);
    }
  }

  console.log(inputs);

  return (
    <div className='login-container'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="email" placeholder='email' name='email' onChange={handleChange} />
        <input required type="password" placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit} >Register</button>
         {err && <p>{err}</p>}
        <span>Don't you have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Register