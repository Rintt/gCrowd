import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './Card.css';

const Card = ({
    title,
    text,
    onPress,
    cardColor,
    titleColor,
    buttonStyle,
    textStyle,
    ButtonText
}) => {
    return (
        <div
            className='CardClass'
            style={{
                backgroundColor: cardColor,
                border: '5px solid ' + titleColor,
                ...buttonStyle
            }}
            onClick={onPress}>
            <h2 className='chClass' style={{
                'color': titleColor,
                fontFamily: 'Spinnaker',
                ...textStyle
            }}>
                {title}
            </h2>
            <p className='cpClass' style={{
                'color': titleColor,
                fontFamily: 'Spinnaker',
                ...textStyle
            }}>
                {text}
            </p>
            <CustomButton title={ButtonText} titleColor="black" textStyle={{fontSize: '1.4vh', marginTop: '0px', fontWeight: 'normal'}} buttonStyle={{paddingBottom:'0.5vh', minHeight: '2vh',  maxHeight: '3.5vh', minWidth: "17vh", border: '0px solid black', backgroundColor: 'white', position : 'absolute', bottom:'3vh'}}>
                
            </CustomButton>
            
        </div>
    );
};

export default Card;
