import React from 'react';
import './Navbar.css';
import logo from '../../logo.png'
import Navlink from './Navlink/Navlink';
import { useSelector, useDispatch } from 'react-redux';
import history from '../../history';



const Navbar = ({
}) => {
  
    const page = useSelector(state => state.page);
    const dispatch = useDispatch();
    const changePage = (value) => {
        dispatch({ type: 'pageChange', value})
    }
    return (
        <div className='container Navbar' style={{ minWidth: "100vw" }}>
            <div className="row ">
                <div className="col-2 logoDiv" onClick={() => {
                        changePage('home')
                        history.push('/')
                    }}>
                    <img  src={logo} className="Nav-logo" alt="logo" />
                </div>
                <div className="col-5">
                </div>
                <div className="col-5 NavContainer">
                    <div className="container">
                        <div className="row ">
                            <div className="col-1"><Navlink to="/" tag ="home" text="Home" flex="1"></Navlink></div>
                            <div className="col-5 bitToTheRight"><Navlink to="/idea" tag ="idea" text="I have a sustainable idea" flex="1"></Navlink></div>
                            <div className="col-5"><Navlink to="/support" tag ="support" text="I want to support an idea" flex="1"></Navlink></div>
                            <div className="col-1"><Navlink to="/contact" tag ="contact" text="Contact" flex="1"></Navlink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
