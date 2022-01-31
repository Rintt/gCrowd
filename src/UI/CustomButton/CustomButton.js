import React from 'react';
import './CustomButton.css';
import classnames from 'classnames';

const CustomButton = ({
    title,
    onPress,
    buttonColor,
    titleColor,
    buttonStyle,
    textStyle,
    buttonAlternate,
    customClassName
}) => {
    return (
        <div
            className={classnames(buttonAlternate ? 'ButtonClass2' : 'ButtonClass', customClassName)}
            style={{
                backgroundColor: buttonColor,
                border: buttonAlternate ? '' : '5px solid ' + titleColor,
                ...buttonStyle
            }}
            onClick={onPress}
            // onPress={onPress}
            >
            <p className={buttonAlternate ? 'pClass2' : 'pClass'} style={{
                'color': buttonAlternate ? '' :  titleColor,
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