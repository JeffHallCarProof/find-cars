import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Events from './Event';
import Budget from './Budget';
import Classes from './Class';
import Preference from './Preference';
import Results from './Results';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';




ReactDOM.render(  
<Router>
    <Switch>
      <Route exact path="/"  component={Home}/>
      <Route path="/Home"  component={Home}/>
      <Route path="/Event"  component={Events}/>
      <Route path="/Budget"  component={Budget}/>
      <Route path="/Class"  component={Classes}/>
      <Route path="/Preference"  component={Preference}/>
      <Route path="/Results"  component={Results}/>

    </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
