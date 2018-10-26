import React, { Component } from 'react';

import { TweenLite} from 'gsap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Budget extends Component {
  render() {


    return (
      <div className="home">


        <p>Budget Screen!</p>
        <Link to="/Class"><button>Class</button></Link>

      </div>
    );
  }
}

export default Budget;