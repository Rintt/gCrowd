import React, { useState } from 'react';
import Navlink from '../../UI/Navbar/Navlink/Navlink';
import CustomButton from '../../UI/CustomButton/CustomButton';
import logo from './g10.png';
import "./Support.css"
import Card from '../../UI/Card/Card';
import ItemSummary from '../../UI/ItemSummary/ItemSummary';
import { connect } from 'react-redux';

export class Support extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {isLoading: false, ideas: [{short: '', founderInfo: '', likes: '', phase: '', campus:'', imgSource: 'A'}]};
      }
      
    render(){
    // console.log(this.props.ideas)

    // const ideas = useSelector(state => state.ideas);
    // const dispatch = useDispatch();
    // const changePage = (value) => {
    //     dispatch({ type: 'pageChange', value})
    // }

    var list = (<div></div>)
    if (this.props.ideas) {
        list = this.props.ideas.map(element => {
        return (<ItemSummary 
            id={element.id}
            key={element.short} 
            short={element.short} 
            campus={element.campus} 
            founderInfo={element.founderInfo}
            likes={element.likes}
            phase={element.phase == '1' ? 'Idea Phase (1)' : (element.phase == '2' ? 'In Production (2)' : 'Pending (0)' )}
            imgSource={element.imgSource}/>)
        })
    }
    return (
        <div>
            <header className="Support-header" >
                <img src={logo} className="Support-logo" alt="logo" />
                <h2 style={{ color: "black", fontFamily: 'Spinnaker', fontSize: 'calc(10px + 5vmin)', marginBottom: '35px' }}>

                    I want to support an <br /> idea on campus
                </h2>
                <p style={{ fontFamily: 'Spinnaker', marginBottom: '25px', color: "black" }}>
                    You have come to the right place! Help students <br />with ideas with funding or your time.
                    <br /><br />
                    Find the list of ideas just below</p>
                    {list}
            </header>
        </div>

    );
}

}

const  mapStateToProps = (state) => {
    return {
        ideas: state.ideas
    };
}

export default connect(mapStateToProps)(Support);