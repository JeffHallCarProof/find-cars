import React, { Component } from 'react';

import { TweenLite} from 'gsap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Classes extends Component {
  render() {


    return (
      <div className="home">


        <p>Class Screen!</p>
        <Link to="/Preference"><button>Preference</button></Link>

      </div>
    );
  }
}

export default Classes;