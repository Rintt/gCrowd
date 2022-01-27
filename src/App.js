import logo from './plant.png';
import friends from './friends.jpeg';
import { Dimensions } from "react";
import Navlink from './Components/Navbar/Navlink/Navlink';
import './App.css';
import CustomButton from './Components/CustomButton/CustomButton';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App" >
      <div className='container' style={{ minWidth: "100vw" }}>
        <div className='row'>
          <div className='col-12'>
            <Navbar />
          </div>
        </div>
      </div>
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
              <CustomButton buttonStyle={{ minHeight: '7vh' }} title='I have an idea' titleColor='black' buttonColor='white' />
            </div>
            <div className='col sm-6'>
              <CustomButton buttonStyle={{ minHeight: '7vh' }} title='I want to support an idea' titleColor='white' buttonColor='transparent' />
            </div>
          </div>
        </div>
      </header>
      <div className='container' style={{ paddingTop: '120px', paddingBottom: '120px', width: "100%" }}>
        <div className='row' >
          <div className='col-6 lowerMenu' style={{ paddingTop: '20px', fontSize: 'calc(10px + 1vmin)' }}>
            <h3 style={{ fontSize: 'calc(10px + 2vmin)', fontFamily: 'Spinnaker' }}><strong>Contact</strong></h3>
            <div className="contactItems">
            <p style={{ fontFamily: 'Spinnaker', marginBottom: '35px', marginTop: '25px', paddingTop: '25px', paddingBottom: '35px' }}>
              Telegram: @mareagusti <br/>Email - marewebs@gmail.com<br/><br/><br/><br/><br/><span style={{color: "#B8B8B8"}}>© 2023 by G-Crowd.</span></p>
          </div></div>
          <div className='col-6 lowerMenu' style={{ paddingTop: '20px', fontSize: 'calc(10px + 1vmin)' }}>
            <h3 style={{ fontSize: 'calc(10px + 2vmin)', fontFamily: 'Spinnaker' }} ><strong>Menu</strong></h3>

            {/* <p style={{ fontFamily: 'Spinnaker', marginBottom: '35px', marginTop: '25px', paddingTop: '25px', paddingBottom: '35px' }}></p> */}
            <div className="container menuItems" >
              <div className="row" style={1 == 1 ? { color: '#75AF33' } : {}}><Navlink text="Home" flex="1"></Navlink></div>
              <div className="row"><Navlink text="I have a sustainable idea" flex="1"></Navlink></div>
              <div className="row"><Navlink text="I want to support an idea" flex="1"></Navlink></div>
              <div className="row"><Navlink text="Contact" flex="1"></Navlink></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
