import React, { Component } from 'react';

import { TweenLite} from 'gsap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Results extends Component {
  render() {


    return (
      <div className="home">


        <p>Results Screen!</p>
        <Link to="/"><button>Home</button></Link>

      </div>
    );
  }
}

export default Results;