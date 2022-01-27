import React from 'react';
import './Navlink.css';

const Navlink = ({
    text,
    flex,
    onPress,
    titleColor,
    buttonStyle,
    textStyle,
}) => {
    return (
        <div className='Navlink'>
            <p style={{ fontFamily: 'Spinnaker', fontSize: 'calc(2vmin - 2px)'}}>{text}</p>
        </div>

    );
};

export default Navlink;
