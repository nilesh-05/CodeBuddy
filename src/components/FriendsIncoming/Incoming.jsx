import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  AiOutlineCheck,
  AiOutlineUsergroupAdd,
  AiOutlineClose,
} from 'react-icons/ai';
const DropDown = ({ requests }) => {
  let reqq = [];
  useEffect(() => {
    reqq = [];
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };
  const [open, setOpen] = useState(false);

  const [req, setReq] = useState({});

  console.log('Requestttt = ', req);

  const people = requests?.map(async (email) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const f = { email: email };
    console.log(' email = ', email);
    const res = await axios.get(
      'http://localhost:5000/api/auth/getUserByEmail',
      {
        params: {
          email: email,
        },
      },
      { config }
    );
    // console.log('res = ', res);
    // req.push(res.data);
    // console.log('Requestttt = ', reqq);
    // setReq(req.push(res.data));
    // setReq(...req, res.data);
    reqq.push(res.data);
    return res.data;
  });
  console.log('People = ', reqq);
  return (
    <div className='noti-container'>
      <div className='outer' onClick={handleClick}>
        <AiOutlineUsergroupAdd />
      </div>
      {console.log(open)}
      {console.log('request array = ', reqq)}
      {open && (
        <div className='dropdown-content'>
          {reqq?.map((request) => {
            console.log(' Map ho rea = ', request);
            return (
              <div className='inline-req'>
                <h5>
                  {/* {axios.get('http://localhost:5000/api/auth/getUserByEmail')} */}
                  hi{request.name}
                  {console.log('NAme = ', request.name)}
                </h5>
                <div className='icons'>
                  <AiOutlineCheck style={{ margin: '10px' }} />
                  <AiOutlineClose style={{ margin: '10px' }} />
                </div>
              </div>
            );
          })}
          <div className='inline-req'>
            <h5>hello</h5>
            <div className='icons'>
              <AiOutlineCheck style={{ margin: '10px' }} />
              <AiOutlineClose style={{ margin: '10px' }} />
            </div>
          </div>
          {/* <div className='inline-req-1'>
            <h5>hello</h5>
            <div className='icons'>
              <AiOutlineCheck style={{ margin: '10px' }} />
              <AiOutlineClose style={{ margin: '10px' }} />
            </div> */}
        </div>
        // </div>
      )}
    </div>
  );
};

export default DropDown;
