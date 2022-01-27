import React, { useContext, useEffect } from 'react';
import './navbar.css';
import AuthContext from '../../context/auth/authContext';
import DropDown from '../FriendsAdded/DropDown';
import Incoming from '../FriendsIncoming/Incoming';
import { FaUserFriends } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';
const Navbar = () => {
  let history = useHistory();
  const authContext = useContext(AuthContext);
  const { user, logout, isAuthenticated } = authContext;

  // useEffect(() => {
  //   console.log('hello boi');
  //   if (!isAuthenticated) {
  //     console.log('hi');
  //     history.push('/');
  //   }
  // }, [isAuthenticated, history]);

  const signOut = () => {
    logout();
  };

  return (
    <nav class='navbar navbar-dark bg-dark justify-content-start align-items-center'>
      <a class='navbar-brand'>
        {' '}
        <span className='text-danger' style={{ fontFamily: 'cursive' }}>
          C
        </span>
        ode
        <span className='text-danger' style={{ fontFamily: 'cursive' }}>
          B
        </span>
        uddy
      </a>
      <div class='input-group mb-3 search-bar'>
        <div class='input-group-prepend'>
          <button
            class='btn btn-info dropdown-toggle'
            type='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
            style={{ color: 'white', height: 45 }}
          >
            Select
          </button>
          <div class='dropdown-menu'>
            <a class='dropdown-item' href='/home'>
              Skill
            </a>
            <div role='separator' class='dropdown-divider'></div>
            <a class='dropdown-item' href='/home'>
              Name
            </a>
          </div>
        </div>
        <input
          class='form-control me-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        ></input>
        <button class='btn btn-outline-success' type='submit'>
          Search
        </button>
      </div>
      <div class='vl'></div>
      <span className='name'> {user?.name ? user.name : 'Username'}</span>
      {/* <button className="round-button">
				<FaUserFriends />
			</button> */}
      <DropDown icon='AiOutlineUsergroupAdd' requests={user?.pendingRequests} />
      <Incoming
        icon='AiOutlineUsergroupAdd'
        requests={user?.recievedRequests}
      />

      <button onClick={signOut} style={{ color: 'black' }} className='name'>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          SignOut
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
