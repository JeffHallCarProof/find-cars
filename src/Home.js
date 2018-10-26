import React, { Component } from 'react';

import { TweenLite} from 'gsap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Home extends Component {
  render() {


    return (
      <div className="home">


        <p>Home Screen!</p>
        <Link to="/Event"><button>Events</button></Link>

      </div>
    );
  }
}

export default Home;