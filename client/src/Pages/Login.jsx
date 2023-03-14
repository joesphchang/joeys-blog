import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Login = () => {
    const [ inputs, setInputs ] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  const [err, setError ] = useState(null);
  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/auth/login", inputs)
      navigate('/');
    } catch (error) {
      setError(error.response.data);
    }
  }

  console.log(inputs);
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' name='name' onChange={handleChange} />
        <input type="password" placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit} >Login</button>
        {err && <p>{err}</p> }
        <span>Don't you have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login