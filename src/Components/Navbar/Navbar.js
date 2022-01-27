import React from 'react';
import './Navbar.css';
import logo from '../../logo.png'
import Navlink from './Navlink/Navlink';

const Navbar = ({
    title,
    onPress,
    buttonColor,
    titleColor,
    buttonStyle,
    textStyle,
}) => {
    return (
        <div className='container Navbar' style={{ minWidth: "100vw" }}>
            <div className="row ">
                <div className="col-2 logoDiv">
                    <img src={logo} className="Nav-logo" alt="logo" />
                </div>
                <div className="col-5">
                </div>
                <div className="col-5 NavContainer">
                    <div className="container">
                        <div className="row ">
                            <div className="col-1" style={1==1? {color:'#75AF33'} : {}}><Navlink text="Home" flex="1"></Navlink></div>
                            <div className="col-5 bitToTheRight"><Navlink text="I have a sustainable idea" flex="1"></Navlink></div>
                            <div className="col-5"><Navlink text="I want to support an idea" flex="1"></Navlink></div>
                            <div className="col-1"><Navlink text="Contact" flex="1"></Navlink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
