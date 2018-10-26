import React, { Component } from 'react';

import logo1_1 from './assets/first.1.svg';
import logo1_2 from './assets/second.1.svg';
import logo1_3 from './assets/third.1.svg';

import logo2_1 from './assets/first.2.svg';
import logo2_2 from './assets/second.2.svg';
import logo2_3 from './assets/third.2.svg';

import logo3_1 from './assets/first.3.svg';
import logo3_2 from './assets/second.3.svg';
import logo3_3 from './assets/third.3.svg';

import logo4_1 from './assets/first.4.svg';
import logo4_2 from './assets/second.4.svg';
import logo4_3 from './assets/third.4.svg';

import logo5_1 from './assets/first.5.svg';
import logo5_2 from './assets/second.5.svg';
import logo5_3 from './assets/third.5.svg';

import logo6_1 from './assets/first.6.svg';
import logo6_2 from './assets/second.6.svg';
import logo6_3 from './assets/third.6.svg';

import logo7_1 from './assets/first.7.svg';
import logo7_2 from './assets/second.7.svg';
import logo7_3 from './assets/third.7.svg';

import logo8_1 from './assets/first.8.svg';
import logo8_2 from './assets/second.8.svg';
import logo8_3 from './assets/third.8.svg';

import './App.css';
import { TimelineMax,TweenLite, Power4, TweenMax,Linear,colorProps} from 'gsap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Preference extends Component {

circles = {
  c1:[logo1_1,logo1_2,logo1_3],
  c2:[logo2_1,logo2_2,logo2_3],
  c3:[logo3_1,logo3_2,logo3_3],
  c4:[logo4_1,logo4_2,logo4_3],
  c5:[logo5_1,logo5_2,logo5_3],
  c6:[logo6_1,logo6_2,logo6_3],
  c7:[logo7_1,logo7_2,logo7_3],
  c8:[logo8_1,logo8_2,logo8_3],
}

state = {
  clicks: [1,1,1,1,1,1,1,1],
  cM:0,
  id: ['Al1','Al2','Al3','Al4','Al5','Al6','Al7','Al8'],
  pColor: [this.circles.c1,this.circles.c2,this.circles.c3,this.circles.c4,this.circles.c5,this.circles.c6,this.circles.c7,this.circles.c8],
  iP: [0,0,0,0,0,0,0,0],
  i: [0,1,2,3,4,5,6,7],
  toNext: false,
}

  render() {




    
    const imageClick = (id,cl) => {
      let click = this.state.clicks.slice();
      let i0 = this.state.pColor.slice();
      let ip = this.state.iP.slice();
      console.log(id);
      console.log(this.state.pColor[0][1]);
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id, 2,{scaleX:1.5, scaleY:1.5})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id, 2,{scaleX:2, scaleY:2})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id, 2,{scaleX:1, scaleY:1})
        click[cl]=1
        ip[cl]=0
      }
      console.log(ip[cl])
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 

    return (
      <div className="App">
        <img src={this.state.pColor[this.state.i[0]][this.state.iP[0]]}onClick={() => imageClick(this.state.id[0],0)} className="App-logo" alt="logo" id={this.state.id[0]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[1]][this.state.iP[1]]}onClick={() => imageClick(this.state.id[1],1)} className="App-logo1" alt="logo" id={this.state.id[1]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[2]][this.state.iP[2]]}onClick={() => imageClick(this.state.id[2],2)} className="App-logo2" alt="logo" id={this.state.id[2]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[3]][this.state.iP[3]]}onClick={() => imageClick(this.state.id[3],3)} className="App-logo3" alt="logo" id={this.state.id[3]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[4]][this.state.iP[4]]}onClick={() => imageClick(this.state.id[4],4)} className="App-logo4" alt="logo" id={this.state.id[4]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[5]][this.state.iP[5]]}onClick={() => imageClick(this.state.id[5],5)} className="App-logo5" alt="logo" id={this.state.id[5]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[6]][this.state.iP[6]]}onClick={() => imageClick(this.state.id[6],6)} className="App-logo6" alt="logo" id={this.state.id[6]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[7]][this.state.iP[7]]}onClick={() => imageClick(this.state.id[7],7)} className="App-logo7" alt="logo" id={this.state.id[7]} height={80}  width={80}/>
        <p>Clicks: {this.state.clicks[0]}!</p>
        <p>Preference Screen!</p>
        <Link to="/Results"><button>Back Home</button></Link>


      
      </div>
    );
  }
}

export default Preference;