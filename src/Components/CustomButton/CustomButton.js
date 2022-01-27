import React from 'react';
import './CustomButton.css';

const CustomButton = ({
    title,
    onPress,
    buttonColor,
    titleColor,
    buttonStyle,
    textStyle,
}) => {
    return (
        <div
            className='ButtonClass'
            style={{
                backgroundColor: buttonColor,
                border: '5px solid ' + titleColor,
                ...buttonStyle
            }}
            onPress={onPress}>
            <p className='pClass' style={{
                'color': titleColor,
                fontFamily: 'Spinnaker',
                fontSize: '80%', ...textStyle
            }}>
                <strong>{title}</strong>
            </p>
        </div>
    );
};

export default CustomButton;

//   const styles = StyleSheet.create({
//     container: {
//       marginTop: 50,
//       backgroundColor: '#512DA8',
//       height: 48,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     title: {
//       color: '#fff',
//       fontSize: 16,
//     },
//   });