import React, { useState } from 'react';
import Navlink from '../../UI/Navbar/Navlink/Navlink';
import CustomButton from '../../UI/CustomButton/CustomButton';
import logo from './plant.png';
import friends from './friends.jpeg';
import "./Welcome.css"
// import { useHistory } from 'react-router-dom';
import history from '../../history';
import { useSelector, useDispatch } from 'react-redux';

const Welcome = () => {
  const dispatch = useDispatch();
  const changePage = (value) => {
      dispatch({ type: 'pageChange', value})
  }
  // const RouteChange = (p) =>  {
  //   let path = p;
  //   let history = useHistory();
  //   history.push(path);
  // }
  return (  
  <div>
  <header className="App-header" >
  <img src={logo} className="App-logo" alt="logo" />
  <h2 style={{ fontFamily: 'Spinnaker', fontSize: 'calc(10px + 5vmin)', marginBottom: '35px' }}>
    Having a sustainable <br /> campus has never <br /> been so easy!
  </h2>
  <p style={{ fontFamily: 'Spinnaker', marginBottom: '25px' }}>
    For students, by students
  </p>
  <div className='container' >
    <div className='row'>
      <div className='col sm-6'>
        <CustomButton onPress={() => 
          {
            changePage('idea')
            history.push('/idea')
          }} buttonStyle={{ minHeight: '7vh' }} title='I have an idea' titleColor='black' buttonColor='white' />
      </div>
      <div className='col sm-6'>
        <CustomButton onPress={() => {
        changePage('support')
        history.push('/support')}} buttonStyle={{ minHeight: '7vh' }} title='I want to support an idea' titleColor='white' buttonColor='transparent' />
      </div>
    </div>
  </div>
  </header>
  </div>

  );
}
 
export default Welcome;