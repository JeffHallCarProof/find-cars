import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import Events from './Events';
import Budget from './Budget';
import Body from './Body';
import Preferences from './Preferences';
import Results from './Results';
//import Results from './Results';
//<Route path="/Results"  component={Results}/>
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

ReactDOM.render(  
  <Router basename={'/carfinder'}>
    <Switch>
      <Route exact path="/"  component={App}/>
      <Route path="/Events"  component={Events}/>
      <Route path="/Budget/:eventId" component={Budget}/>
      <Route path="/Body/:eventId/:lowerBound/:upperBound"  component={Body}/>
      <Route path="/Preferences/:eventId/:lowerBound/:upperBound/:classId"  component={Preferences}/>
      <Route path="/Results/:eventId/:lowerBound/:upperBound/:classId/:numArray"  component={Results}/>
      
    </Switch>
  </Router>, document.getElementById('root'));
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();