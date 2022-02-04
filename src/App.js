import { BrowserRouter, Link, Router, Route, Switch, withRouter } from 'react-router-dom'
import Navbar from './UI/Navbar/Navbar';
import Navlink from './UI/Navbar/Navlink/Navlink';
// pages
import Welcome from "./pages/welcome/Welcome"
import Idea from './pages/idea/Idea';
import {createBrowserHistory} from 'history';
import history from './history';
import Support from './pages/support/Support';
import SingleIdea from './pages/singleIdea/SingleIdea';
export const customHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
 <div className='container' style={{ minWidth: "100vw", position: "relative", top: "00px" , right:"000px"}}>
        <div className='row'>
          <div className='col-12'>
            <Navbar />
          </div>
        </div>
      </div>
        {/* <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav> */}
        <Switch>
          <Route exact path="/" component={withRouter(Welcome)} />
          <Route
            exact
            path="/idea/:id"
            component={SingleIdea}/>
          <Route path="/Idea" component={withRouter(Idea)} />
          <Route path="/Support" component={withRouter(Support)} />
 
        </Switch>
      <div className='container' style={{ paddingTop: '120px', paddingBottom: '120px', width: "100%" }}>
        <div className='row' >
          <div className='col-6 lowerMenu' style={{ paddingTop: '20px', fontSize: 'calc(10px + 1vmin)' }}>
            <h3 style={{ fontSize: 'calc(10px + 2vmin)', fontFamily: 'Spinnaker' }}><strong>Contact</strong></h3>
            <div className="contactItems">
            <p style={{ fontFamily: 'Spinnaker', marginBottom: '35px', marginTop: '25px', paddingTop: '25px', paddingBottom: '35px' }}>
              Telegram: @mareagusti <br/>Email - marewebs@gmail.com<br/><br/><br/><br/><br/><span style={{color: "#B8B8B8"}}>© 2023 by G-Crowd.</span></p>
          </div></div>
          <div className='col-6 lowerMenu' style={{ paddingTop: '20px', fontSize: 'calc(10px + 1vmin)' }}>
            <h3 style={{ fontSize: 'calc(10px + 2vmin)', fontFamily: 'Spinnaker' }} ><strong>Menu</strong></h3>

            {/* <p style={{ fontFamily: 'Spinnaker', marginBottom: '35px', marginTop: '25px', paddingTop: '25px', paddingBottom: '35px' }}></p> */}
            <div className="container menuItems" >
              <div className="row"><Navlink to="/" tag ="home" text="Home" flex="1"></Navlink></div>
              <div className="row"><Navlink to="/idea" tag ="idea" text="I have a sustainable idea" flex="1"></Navlink></div>
              <div className="row"><Navlink to="/support" tag ="support" text="I want to support an idea" flex="1"></Navlink></div>
              <div className="row"><Navlink to="/contact" tag ="contact" text="Contact" flex="1"></Navlink></div>
            </div>
          </div>
        </div>
      </div>
      </Router>
    </div>
  )
}

export default App