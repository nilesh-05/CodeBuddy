import React, { useContext, useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import AuthContext from '../../context/auth/authContext';

function Item({ email }) {
  const authContext = useContext(AuthContext);
  const { user, loadUser } = authContext;
  const [item, setitem] = useState(null);

  // console.log('ITEM = ', email);
  let res = undefined;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    newFriend: user.email,
    me: item?.data,
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

  const cancelRequest = () => {
    console.log('Cancelled');
    const res = axios.post('http://localhost:5000/api/friends/reject', config);
    loadUser();
  };

  return (
    <div className='inline-req'>
      {/* {console.log('HI BRO ', item)} */}
      <h5>Name = {item?.data.name}</h5>
      <div className='icons'>
        {/* <AiOutlineCheck style={{ margin: '10px' }} /> */}
        <AiOutlineClose onClick={cancelRequest} style={{ margin: '10px' }} />
      </div>
    </div>
  );
}

export default Item;
