import React, { useState } from 'react';
import {
  AiOutlineCheck,
  AiOutlineUsergroupAdd,
  AiOutlineClose,
} from 'react-icons/ai';
import IncomingItem from './IncomingItem';

const DropDown = ({ requests }) => {
  // console.log('COMING = ', requests);

  const handleClick = async () => {
    setOpen(!open);
  };

  const [open, setOpen] = useState(false);

  return (
    <div className='noti-container'>
      <div className='outer' onClick={handleClick}>
        <AiOutlineUsergroupAdd />
      </div>
      {/* {console.log(open)} */}
      {open && (
        <div className='dropdown-content'>
          {requests?.map((request) => {
            if (request) return <IncomingItem email={request} />;
          })}

          <div className='inline-req'>
            <h5>Demo name</h5>
            <div className='icons'>
              <AiOutlineCheck style={{ margin: '10px' }} />
              <AiOutlineClose style={{ margin: '10px' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
