import React, { Component } from 'react';

import { TweenLite} from 'gsap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Events extends Component {
  render() {


    return (
      <div className="home">


        <p>Events Screen!</p>
        <Link to="/Budget"><button>Budget</button></Link>

      </div>
    );
  }
}

export default Events;