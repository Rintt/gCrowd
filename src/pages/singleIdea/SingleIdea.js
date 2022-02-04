import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import CustomButton from '../../UI/CustomButton/CustomButton';
import "./SingleIdea.css"

import { connect } from 'react-redux';

export class SingleIdea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const id = window.location.pathname.split('/').slice(-1)[0];
        const idea = this.props.ideas[id - 1];
        // console.log(idea)
        // console.log(id);
        const buttonStyle = { marginTop: '0px', marginBottom: '10px', height: '2.5vw', minHeight: '40px', width: '14vw', minWidth: '200px', position: 'relative', left: '-3.6vw' }

        return (
            <div>
                <div className="container SingleIdea ">
                    <div className="row giveMeMargin">

                        <div className="col-6 centerVert" >

                            <div className="row ">
                                <img className="founder-img center" src={require('../../UI/ItemSummary/' + idea.imgSource + '.jpg')} />
                            </div>
                            <div className="row center">
                                <h1>{idea.title}</h1>
                            </div>
                            <div className="row center">
                                <h3>{idea.founderInfo}</h3>
                            </div></div>
                        <div className="col-6">
                            <div className="row">
                                <h4 className='center'>Idea Description</h4>
                                <p>{idea.long}</p>
                            </div>
                            <div className="row">
                                <h4 className='center'>What we need</h4>
                                <p>{idea.need}</p>
                            </div>
                        </div>
                    </div>
                    <div className="whiteBack">
                    <div className="row giveMeMargin">
                        <div className="col-3 center">
                            <h3>Stage</h3>
                            <h4>{idea.phase}</h4>
                        </div>

                        <div className="col-3 center">
                            <h3>Likes</h3>
                            <h4>{idea.likes}</h4>
                        </div>
                        <div className="col-6 center">
                            <h3>Progress</h3>
                            <div className='containerContainer'>
                            <div className="w3-container" style={{width: idea.progress + '%',
                             backgroundColor: idea.progress == '100' ? '#ffdb1b' : '',
                             color: idea.progress == '100' ? '#75AF33' : 'white'
                             }}>{idea.progress}%</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 ">
                            <h3 className='center'>Founding Team</h3>
                            <p>{idea.team}</p>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-4">
                            <div className="row">
                                <h3>Help the idea</h3>
                            </div>
                            <div className="row">
                                <CustomButton onPress={() => {this.props.increment(idea.id)}} buttonAlternate={true} buttonStyle={buttonStyle} textStyle={{ fontSize: '1.6vh', marginTop: '6px', fontWeight: '300' }} title="Invest in the project" />
                            </div>
                            <div className="row">
                                <CustomButton buttonAlternate={true} buttonStyle={buttonStyle} textStyle={{ fontSize: '1.6vh', marginTop: '6px', fontWeight: '300' }} title="Get into the team" />

                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ideas: state.ideas
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
    increment: (p1) => dispatch({ type: 'increment', id:p1 }),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SingleIdea);