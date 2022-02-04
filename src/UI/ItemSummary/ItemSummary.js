import React from 'react';
import './ItemSummary.css';
import classnames from 'classnames';
import CustomButton from '../CustomButton/CustomButton';
import history from '../../history';
import { useDispatch } from 'react-redux';

const ItemSummary = ({
    title,
    onPress,
    ItemSummaryColor,
    titleColor,
    ItemSummaryStyle,
    textStyle,
    ItemSummaryAlternate,
    customClassName,
    short,
    likes,
    founderInfo,
    campus,
    imgSource,
    phase,
    id
}) => {
    const dispatch = useDispatch();
    const changePage = (value) => {
        dispatch({ type: 'pageChange', value})
    }
    const bitLower = {position:'relative', top: '28px'}
    const buttonStyle =  {marginTop: '0px', marginBottom: '10px', height: '2.5vw', minHeight: '40px',width: '12vw', minWidth: '200px', position:'relative', right: '44px'}
    // const icon = require(String(imgSource));
    return (
        <React.Fragment>
        <div className="ItemSummaryClass2">
            <div className="row">
                <div className="col-8">

                    <h3 style={{color: 'black'}}>IDEA DESCRIPTION</h3>
                    <p className='ipClass'>{short}</p>
                </div>        
                <div className="col-4 HelpTheIdea" style={{
                    // border: '1px solid black'
                    }}>
                    <h3>HELP THE IDEA</h3>
                    <CustomButton onPress={() => {
                            changePage('idea')
                            history.push('/idea/' + id)
                        }}title="Invest in the project" buttonAlternate={true} buttonStyle={buttonStyle} textStyle={{fontSize: '1.6vh', marginTop: '8px', fontWeight: 'normal'}} ></CustomButton>
                    <CustomButton onPress={() => {
                            changePage('idea')
                            history.push('/idea/' + id)
                        }} title="Get into the team" buttonAlternate={true} buttonStyle={buttonStyle} textStyle={{fontSize: '1.6vh', marginTop: '8px', fontWeight: 'normal'}}> </CustomButton>
                    </div>       
             </div>

            </div>
        <div
            className={classnames(ItemSummaryAlternate ? 'ItemSummaryClass2' : 'ItemSummaryClass', customClassName)}
            style={{
                backgroundColor: ItemSummaryColor,
                border: ItemSummaryAlternate ? '' : '5px solid ' + titleColor,
                ...ItemSummaryStyle
            }}
            onClick={onPress}
        // onPress={onPress}
        >
            
            <div className="container">    
                <div className="row">
                    <div className="col-2">
                        <CustomButton 
                        onPress={() => {
                            changePage('idea')
                            history.push('/idea/' + id)
                        }}
                        textStyle={{ position: 'relative', top: "0.5vh",}} 
                        buttonAlternate={true} title="+ Read More"
                        buttonStyle={{marginLeft: '-65px', height:'6vh', width:'20vh', position: 'relative', bottom: "1vh"}}/>
                    </div>
                    <div className="col-2">
                        <img src={require('./' + imgSource + '.jpg' )} className="founder-logo" alt="Profile Img" />  
                    </div>
                    <div className="col-2" style={{}}>
                    <div className="row">
                        <h4 style={{color:'#75AF33'}}>Founder's Info</h4>
                    </div>
                    <div className="row">
                        <p className='ipClass'>{founderInfo}</p>
                    </div>
                    </div>
                    <div className="col-2" style={bitLower}>
                    <div className="row">
                        <h4 style={{color:'#75AF33'}}>Campus</h4>
                    </div>
                    <div className="row">
                        <p className='ipClass'>{campus}</p>
                    </div>
                    </div>
                    <div className="col-2" style={bitLower}>
                    <div className="row">
                        <h4 style={{color:'#75AF33'}}>Stage</h4>
                    </div>
                    <div className="row">
                        <p className='ipClass'>{phase}</p>
                    </div>
                    </div>
                    <div className="col-2" style={bitLower}>
                    <div className="row">
                        <h4 style={{color:'#75AF33'}}>Likes</h4>
                    </div>
                    <div className="row">
                        <p className='ipClass'>{likes}</p>
                    </div>
                    </div>

                    <p className={ItemSummaryAlternate ? 'pClass2' : 'pClass'} style={{
                        'color': ItemSummaryAlternate ? '' : titleColor,
                        fontFamily: 'Spinnaker',
                        fontSize: '80%', ...textStyle
                    }}>
                        <strong>{title}</strong>
                    </p>

                </div>
            </div>
                    </div>
        </React.Fragment>
    );
};

export default ItemSummary;

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