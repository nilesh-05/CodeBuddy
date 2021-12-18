import React, { useContext } from 'react';
import Friend from '../friends/Friend';
import './main.css';
import AuthContext from '../../context/auth/authContext';
const FriendMain = () => {
  const authContext = useContext(AuthContext);
  const { user, pymk } = authContext;
  return (
    <div className='friends-main'>
      <h3 className='text-center mt-3 heading'>Friends</h3>
      {console.log('PYMK = ', pymk)}
      {console.log('USER = ', user)}
      {user?.friends.map((item) => {
        return <Friend name={item.name} />;
      })}

      <Friend name='Nilesh' />
    </div>
  );
};

export default FriendMain;
