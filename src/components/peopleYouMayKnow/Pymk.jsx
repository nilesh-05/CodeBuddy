import React, { useContext, useEffect, useState } from 'react';
import './Pymk.css';
import Card from './Card';
// import AuthContext from '../../context/auth/authContext';
import AuthContext from '../../context/auth/authContext';
const Pymk = () => {
  const authContext = useContext(AuthContext);

  const { pymk } = authContext;

  return (
    <div className='pymk_main'>
      <h3>People You May Know</h3>
      {/* {console.log('PEOPLE = ', pymk)} */}
      {pymk?.map((item) => {
        // console.log('ITEM1 = ', item);
        return <Card name={item} />;
      })}
      <Card name='Navjot' />
    </div>
  );
};

export default Pymk;
