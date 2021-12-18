import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { useContext, useEffect, useState } from 'react';

const Login = () => {
  let history = useHistory();
  const authContext = useContext(AuthContext);

  const { login, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    console.log('hello boi');
    if (isAuthenticated) {
      console.log('hi');
      history.push('/home');
    }
  }, [isAuthenticated, history]);

  const onSubmit = (e) => {
    e.preventDefault();
    // if (email === '' || password === '') {
    //   setAlert('Please fill in all fields', 'danger');
    // } else {
    login({
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
            />
            <input type='submit' value='Login' className='loginBtn' />
            {/* Login
            </input> */}
            {/* <a href='#' className='forgot'>
              <span>Forgot Password?</span>
            </a> */}
            <button className='registerBtn'>
              <Link
                to='/register'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Create a new account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
