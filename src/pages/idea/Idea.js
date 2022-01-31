import React, { useState } from 'react';
import Navlink from '../../UI/Navbar/Navlink/Navlink';
import CustomButton from '../../UI/CustomButton/CustomButton';
import logo from './g10.png';
import "./Idea.css"
import Card from '../../UI/Card/Card';

function Idea() {
  return (
    <div>
      <header className="Idea-header" >
        <img src={logo} className="Idea-logo" alt="logo" />
        <h2 style={{ color: "black", fontFamily: 'Spinnaker', fontSize: 'calc(10px + 5vmin)', marginBottom: '35px' }}>

          I have a <br /> sustainable <br />Startup idea
        </h2>
        <p style={{ fontFamily: 'Spinnaker', marginBottom: '25px', color: "black" }}>
          You have come to the right place! <br />
          <br />

          Are you looking for funding or more team <br />members to start your startup?        </p>
        <div className='container' >
          <div className='row'>
            <div className='col sm-2'>
            </div>
            <div className='col sm-8'>
              <CustomButton buttonAlternate={true} buttonStyle={{ minHeight: '8vh', minWidth: "36vh" }} title='Submit your idea' />
            </div>
            <div className='col sm-2'>
            </div>
          </div>
        </div>
        <div className='container cardContainer' >
          <div className='row'>
            <div className='col sm-3'>
              <Card cardColor={"#75AF33"} title="1" text="Tell us more about your idea & what you need" ButtonText='Submit Idea'></Card>
            </div>
            <div className='col sm-3'>
              <Card cardColor={"#8BBB53"} title="2" text="We will review the idea and publish it if it follows our criteria" ButtonText='Check Status'></Card>
            </div>
            <div className='col sm-3'>
              <Card cardColor={"#A1C874"} title="3" text="Enter the marketplace and receive funding and help from your collegues" ButtonText='Check Marketplace'> </Card>
            </div>
            <div className='col sm-3'>
              <Card cardColor={"#B1D28C"} title="4" text="Start your idea and focus on startup growth!" ButtonText='Contact Mentors'></Card>
            </div>
          </div>
        </div>
      </header>
    </div>

  );
}

export default Idea;