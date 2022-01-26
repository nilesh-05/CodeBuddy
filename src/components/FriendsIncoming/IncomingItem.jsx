import React from 'react';
import axios from 'axios';
import {
  AiOutlineCheck,
  // AiOutlineUsergroupAdd,
  AiOutlineClose,
} from 'react-icons/ai';
import { useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import { useContext } from 'react';

function IncomingItem({ email }) {
  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;

  const [item, setitem] = useState(null);

  // console.log('ITEM = ', email);
  let res = undefined;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    me: user,
    newFriend: item?.data.email,
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
    // console.log('RESULT = ', res);
  };
  if (item == null) req(email);

  const acceptRequest = async (e) => {
    const res = await axios.post(
      'http://localhost:5000/api/friends/accept',
      config
    );

    console.log(res);
    loadUser();
  };

  const rejectRequest = () => {};

  return (
    <div className='inline-req'>
      {/* {console.log('HI BRO ', item)} */}
      <h5>Name = {item?.data.name}</h5>
      <div className='icons'>
        <AiOutlineCheck onClick={acceptRequest} style={{ margin: '10px' }} />
        <AiOutlineClose onClick={rejectRequest} style={{ margin: '10px' }} />
      </div>
    </div>
  );
}

export default IncomingItem;
