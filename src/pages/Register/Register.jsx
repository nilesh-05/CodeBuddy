import './Register.css';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
// import { useHistory } from 'react-router-dom';

const Register = (props) => {
  // let history = useHistory();
  const authContext = useContext(AuthContext);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const { register, isAuthenticated } = authContext;

  // useEffect(() => {
  //   console.log('hello boi');
  //   if (isAuthenticated) {
  //     console.log('hi');
  //     history.push('/home');
  //   }
  // }, [isAuthenticated, history]);

  const onSubmit = (e) => {
    e.preventDefault();
    // if (name === '' || email === '' || password === '') {
    //   setAlert('Please enter all fields', 'danger');
    // } else if (password !== password2) {
    //   setAlert('Passwords do not match', 'danger');
    // } else {
    register({
      name,
      email,
      password,
    });
    // }
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Code Buddy</h3>
          <span className='loginDesc'>
            Connect with new people to develop cool stuff with{' '}
            <span className='highlight'> Code Buddy</span> .
          </span>
        </div>
        <div className='loginRight'>
          <form onSubmit={onSubmit} className='loginBox'>
            <input
              placeholder='Username'
              className='loginInput'
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              required
            />
            <input
              placeholder='E-mail'
              className='loginInput'
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
            <input
              placeholder='Password'
              className='loginInput'
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              required
              minLength='6'
            />
            <input
              placeholder='Password Again'
              className='loginInput'
              type='password'
              name='password2'
              value={password2}
              onChange={onChange}
              required
              minLength='6'
            />

            <input className='loginBtn' type='submit' value='Register' />

            {/* <button className="registerBtn">
							<Link to="/" style={{ textDecoration: "none", color: "white" }}>
								Log In
							</Link>
						</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
