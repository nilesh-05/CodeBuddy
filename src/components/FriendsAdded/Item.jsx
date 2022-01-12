import React, { useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';

function Item({ email }) {
  const [item, setitem] = useState(null);

  // console.log('ITEM = ', email);
  let res = undefined;
  const req = async (email) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

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
  return (
    <div className='inline-req'>
      {/* {console.log('HI BRO ', item)} */}
      <h5>Name = {item?.data.name}</h5>
      <div className='icons'>
        <AiOutlineCheck style={{ margin: '10px' }} />
        <AiOutlineClose style={{ margin: '10px' }} />
      </div>
    </div>
  );
}

export default Item;
