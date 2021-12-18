import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  SETPYMK,
} from '../types';

const AuthState = (props) => {
  var c = 0;
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
    pymk: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // load user
  const loadUser = async () => {
    // @todo - load token into global headers
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      console.log('USER =');
      const res = await axios.get('http://localhost:5000/api/auth');
      console.log(res);
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // register user
  const register = async (formData) => {
    console.log('Hitt');
    console.log(formData);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      },
    };

    try {
      const res = await axios.post(
        'http://localhost:5000/api/users',
        formData,
        config
      );

      console.log('RES = ', res);
      // dispatch({
      //   type: REGISTER_SUCCESS,
      //   payload: res.data,
      // });

      // loadUser();
    } catch (err) {
      // dispatch({
      //   type: REGISTER_FAIL,
      //   payload: err.response.data.msg,
      // });
      console.log(err);
    }
  };

  // login user
  const login = async (formData) => {
    console.log('Hit');
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth',
        formData,
        config
      );

      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      getUsers();
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //logout user
  const logout = () => dispatch({ type: LOGOUT });

  //clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  // Get People You May Know
  const getUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/auth/getAll');
    console.log(res);

    dispatch({
      type: SETPYMK,
      payload: res.data,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        pymk: state.pymk,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
        getUsers,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
