import React, { Component, useState } from 'react';
import Navlink from '../../UI/Navbar/Navlink/Navlink';
import CustomButton from '../../UI/CustomButton/CustomButton';
import logo from './g10.png';
import "./Idea.css"
import Card from '../../UI/Card/Card';
import { connect } from 'react-redux';


export class Idea extends Component {
  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: !this.state.isShown, title:'',founderInfo: '', short:'', need: '', team:'', campus:'', });
  };
  closeModal = () => {
    this.setState({ isShown: false });
  };

  onSubmit = () => {
    console.log('SUBMITTED!')
    this.showModal();
    this.props.newIdea(this.state.short, this.state.need, this.state.team, this.state.founderInfo, this.state.campus, this.state.title)
  };

  render() {
    const  modal = (
    <div className="modalArea" ref={this.props.modalRef}>

        <div onClick={this.closeModal}
          className="modalClose-container">
          <div className="leftright"></div>
          <div className="rightleft"></div>
        </div>
        <div className="modal-body">
        <div className="container  someSpace">
          <div className="row">
            <div className="col-4">
        <h3>What's your name</h3>
        <textarea
          type="text"
          className='inputS'
          value={this.state.founderInfo}
          onChange={e => this.setState({ founderInfo: e.target.value })}
        /><p>{this.state.value}</p>
        </div>
        <div className="col-4">
      <h3>Whats your campus</h3>
              <textarea
          type="text"
          className='inputS'
          value={this.state.campus}
          onChange={e => this.setState({ campus: e.target.value })}
        /><p>{this.state.value}</p>
      </div>
        <div className="col-4">
                <h3>What's the title of your idea</h3>
        <textarea
          type="text"
          className='inputS'
          value={this.state.title}
          onChange={e => this.setState({ title: e.target.value })}
        /><p>{this.state.value}</p>
        </div>        
      </div>
      <div className="row">
        <div className="col-4">
          <h3>How would you describe your idea </h3>
        <textarea
          type="text"
          className='inputL '
          value={this.state.short}
          onChange={e => this.setState({ short: e.target.value })}
        /><p>{this.state.value}</p></div>
        <div className="col-4">
                <h3>What do you need for your idea</h3>
        <textarea
          type="text"
          className='inputL'
          value={this.state.need}
          onChange={e => this.setState({ need: e.target.value })}
        /><p>{this.state.value}</p>
       </div>
       <div className="col-4">
                <h3>Tell us about your team and your background</h3>
        <textarea
          type="text"
          className='inputL'
          value={this.state.team}
          onChange={e => this.setState({ team: e.target.value })}
        /><p>{this.state.value}</p>
       </div>
       </div>
          <CustomButton buttonAlternate={true} title="Submit" onPress={() => this.onSubmit()}>
            Submit
          </CustomButton>

        </div></div></div>
    )
    return (
      <div>
        <header className="Idea-header" >

          <img src={logo} className="Idea-logo" alt="logo" />
          {!this.state.isShown ? (
            <div>
              <h2 style={{ color: "black", fontFamily: 'Spinnaker', fontSize: 'calc(10px + 5vmin)', marginBottom: '35px' }}>

                I have a <br /> sustainable <br />Startup idea
              </h2>
              <p style={{ fontFamily: 'Spinnaker', marginBottom: '25px', color: "black" }}>
                You have come to the right place! <br />
                <br />

                Are you looking for funding or more team <br />members to start your startup?        </p>
            </div>) : null}
          <div className='container' >

            <div className='row'>
              <div className='col sm-2'>
              </div>
              <div className='col sm-8'>
                {!this.state.isShown ? (
                  <CustomButton
                    onPress={this.showModal}
                    buttonAlternate={true}
                    buttonStyle={{ minHeight: '8vh', minWidth: "36vh" }}
                    title='Submit your idea' />) : null}
              </div>
              {this.state.isShown ? (
                modal 
              ) : null}
              <div className='col sm-2'>
              </div>
            </div>
          </div>
          {!this.state.isShown ? (
            <div className='container cardContainer' >
              <div className='row'>
                <div className='col sm-3'>
                  <Card cardColor={"#75AF33"} title="1" text="Tell us more about your idea & what you need" ButtonText='Submit Idea'></Card>
                </div>
                <div className='col sm-3'>
                  <Card cardColor={"#8BBB53"} title="2" text="We will review the idea and publish it if it follows our criteria" ButtonText='Check Status'></Card>
                </div>
                <div className='col sm-3'>
                  <Card cardColor={"#A1C874"} title="3" text="Enter the marketplace and receive funding and help from your collegues" ButtonText='Check Marketplace'> </Card>
                </div>
                <div className='col sm-3'>
                  <Card cardColor={"#B1D28C"} title="4" text="Start your idea and focus on startup growth!" ButtonText='Contact Mentors'></Card>
                </div>
              </div>
            </div>) : null}
        </header>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
      ideas: state.ideas
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
  newIdea: (p1, p2, p3, p4, p5, p6) => dispatch({ type: 'newIdea', short:p1, need:p2, team:p3, founderInfo:p4, campus:p5, title:p6 }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Idea);