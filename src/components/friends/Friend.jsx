import axios from 'axios';
import React, { useState } from 'react';
import './Friend.css';
const Friend = (props) => {
  const [item, setitem] = useState(null);
  let res = undefined;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const req = async (email) => {
    res = await axios.get(
      'http://localhost:5000/api/auth/getUserByEmail',
      {
        params: {
          email: email,
        },
      },
      { config }
    );
    setitem(res);
    console.log('RESULT FRiend = ', res);
  };
  if (item == null) req(props.name);

  return (
    <div className='section'>
      <button class='img-btn'>
        <img src='' alt='' />
      </button>
      <p className='names'>{item?.data.name}</p>
      <button className='btn btn-outline-success chat'>Chat</button>
    </div>
  );
};

export default Friend;
