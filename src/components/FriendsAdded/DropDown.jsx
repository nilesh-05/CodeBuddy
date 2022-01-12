import React, { useState } from 'react';
import './DropDown.css';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import Item from './Item';
const DropDown = ({ icon, requests }) => {
  const handleClick = () => {
    setOpen(!open);
  };
  const [open, setOpen] = useState(false);
  return (
    <div className='noti-container'>
      <div className='outer' onClick={handleClick}>
        <FaUserFriends />
      </div>
      {open && (
        <div className='dropdown-content'>
          {requests?.map((request) => {
            if (request) return <Item email={request} />;
          })}

          <div className='inline-req'>
            <h5>hello</h5>
            <div className='icons'>
              <AiOutlineCheck style={{ margin: '10px' }} />
              <AiOutlineClose style={{ margin: '10px' }} />
            </div>
          </div>
          {/* <div className="inline-req-1">
						<h5>hello</h5>
						<div className="icons">
							<AiOutlineCheck style={{ margin: "10px" }} />
							<AiOutlineClose style={{ margin: "10px" }} />
						</div>
					</div> */}
        </div>
      )}
    </div>
  );
};

export default DropDown;
