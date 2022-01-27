import React, { useContext } from 'react';
import './Card.css';
import AuthContext from '../../context/auth/authContext';
import axios from 'axios';

const Card = (props) => {
  // console.log('CARDITEM = ', props.name);

  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    me: user?.email,
    newFriend: props.name?.email,
  };

  const sendRequest = async () => {
    console.log('Sent');
    const res = await axios.post(
      'http://localhost:5000/api/friends/send',
      config
    );
    console.log('Result = ', res);
    loadUser();
  };

  return (
    <>
      <div className='d-flex bg-light my-4 top'>
        <figure className='img-sec'>
          <img src='' alt='' />
        </figure>
        <hr />
        <div className='info_sec py-3 d-flex flex-column'>
          <div className='name'>
            <h3 style={{ color: 'black' }}>{props.name?.name}</h3>
            <figcaption className='mt-n-3'>helloWorld.com</figcaption>
          </div>
          <div className='skills mt-3 mx-1'>
            <h5>Skillset</h5>
            <figcaption>skill1,skill2,skill3</figcaption>
          </div>
        </div>
        <div className='view_sec d-flex flex-column'>
          <button className='btn btn-lg btn-success'>ViewProfile</button>
          <button onClick={sendRequest} className='btn btn-lg btn-success'>
            Add Friend
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
