import React, { Component } from 'react';
import clickM from './assets/clickMe.svg';
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
import { TweenLite, Expo} from 'gsap';
import {  Link } from "react-router-dom";
import '../node_modules/matter-js';


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
  id: ['Al1','Al2','Al3','Al4','Al5','Al6','Al7','Al8','Alc'],
  pColor: [this.circles.c1,this.circles.c2,this.circles.c3,this.circles.c4,this.circles.c5,this.circles.c6,this.circles.c7,this.circles.c8],
  iP: [0,0,0,0,0,0,0,0],
  i: [0,1,2,3,4,5,6,7],
  toNext: false,
  isHidden: true,
}

  render() {
    let click = this.state.clicks.slice();
    let i0 = this.state.pColor.slice();
    let ip = this.state.iP.slice();



    //Comfort Al1
    const circleClick0 = (id,cl) => {
      console.log(id);
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id, 1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:-35})
        TweenLite.to("#Al8", 1,{ease: Expo.easeOut,x:-5 ,y:-27})
        TweenLite.to("#Al3", 1,{ease: Expo.easeOut,x:-42 ,y:40})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:-45})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-7 ,y:-44})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-48 ,y:50})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:-25})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-5 ,y:-22})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-38 ,y:20})
        
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    //InteriorDesign Al2
    const circleClick1 = (id,cl) => {
      console.log(id);
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:30 ,y:13})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:45 ,y:-15})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-2 ,y:45})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:40 ,y:18})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:50 ,y:-25})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-5 ,y:50})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:27 ,y:10})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:40 ,y:-14})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:0 ,y:20})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    }
    
    //ExteriorDesign Al3
    const circleClick2 = (id,cl) => {
      console.log(id);
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:-42 ,y:40})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-50})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-6 ,y:37})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:-48 ,y:50})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-55})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-3 ,y:45})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:-38 ,y:40})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-45})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-10 ,y:30})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    //BuildQuality Al4
    //All animation must respect this set of animations
    const circleClick3 = (id,cl) => {
      console.log(id);
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,x:0 ,y:0})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-45})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-6 ,y:-38})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:20 ,y:-45})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:50 ,y:-28})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:30 ,y:13})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-2 ,y:45})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-42 ,y:40})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,x:0 ,y:0})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-50})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-20 ,y:-45})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:24 ,y:-50})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:55 ,y:-34})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:40 ,y:18})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:2 ,y:50})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-48 ,y:50})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        click[cl]=1
        ip[cl]=0
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,x:0 ,y:0})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-30})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-5 ,y:-36})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:18 ,y:-40})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:45 ,y:-26})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:27 ,y:10})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-6 ,y:40})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-38 ,y:40})
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    
    //Performance Al5    
    const circleClick4 = (id,cl) => {
      console.log(id);
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:-2 ,y:37})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:40 ,y:15})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-42 ,y:40})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:-5 ,y:45})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:44 ,y:20})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-48 ,y:50})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:0 ,y:20})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:32 ,y:13})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-32 ,y:39})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    //FunToDrive Al6
    const circleClick5 = (id,cl) => {
      console.log(id);
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:20,y:-45})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-2 ,y:-34})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:45 ,y:-28})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:24,y:-50})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-20 ,y:-45})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:50 ,y:-34})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1, x:18,y:-40})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-1 ,y:-32})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:40 ,y:-26})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    //FuelEconomy Al7
    const circleClick6 = (id,cl) => {
      console.log(id);
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:45 ,y:-15})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:20,y:-45})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:36 ,y:13})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:50 ,y:-25})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:24,y:-50})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:40 ,y:18})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:40 ,y:-14})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:18,y:-40})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:34 ,y:10})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    //Reliability Al8
    const circleClick7 = (id,cl) => {
      console.log(id);
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:-5 ,y:-27})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-40})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:20 ,y:-45})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:-7 ,y:-44})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-45})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:24 ,y:-50})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:-5 ,y:-18})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-38})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:18 ,y:-40})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    const clickMe = () => {


    TweenLite.to("#Alc",1,{ease: Expo.easeOut,scaleX:0, scaleY:0})
    TweenLite.to("#Al1",2,{ease: Expo.easeOut,x:-30})
    TweenLite.to("#Al8",2,{ease: Expo.easeOut,x:-5 ,y:-36})
    TweenLite.to("#Al6",2,{ease: Expo.easeOut,x:18 ,y:-40})
    TweenLite.to("#Al7",2,{ease: Expo.easeOut,x:45 ,y:-26})
    TweenLite.to("#Al2",2,{ease: Expo.easeOut,x:27 ,y:10})
    TweenLite.to("#Al5",2,{ease: Expo.easeOut,x:-6 ,y:40})
    TweenLite.to("#Al3",2,{ease: Expo.easeOut,x:-38 ,y:40})
    } 

    return (
      <div className="App">
       
        <img src={this.state.pColor[this.state.i[0]][this.state.iP[0]]}onClick={() => circleClick0(this.state.id[0],0)} className="App-logo" alt="logo" id={this.state.id[0]} height={80}  width={80} />
        <img src={this.state.pColor[this.state.i[1]][this.state.iP[1]]}onClick={() => circleClick1(this.state.id[1],1)} className="App-logo1" alt="logo" id={this.state.id[1]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[2]][this.state.iP[2]]}onClick={() => circleClick2(this.state.id[2],2)} className="App-logo2" alt="logo" id={this.state.id[2]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[3]][this.state.iP[3]]}onClick={() => circleClick3(this.state.id[3],3)} className="App-logo3" alt="logo" id={this.state.id[3]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[4]][this.state.iP[4]]}onClick={() => circleClick4(this.state.id[4],4)} className="App-logo4" alt="logo" id={this.state.id[4]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[5]][this.state.iP[5]]}onClick={() => circleClick5(this.state.id[5],5)} className="App-logo5" alt="logo" id={this.state.id[5]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[6]][this.state.iP[6]]}onClick={() => circleClick6(this.state.id[6],6)} className="App-logo6" alt="logo" id={this.state.id[6]} height={80}  width={80}/>
        <img src={this.state.pColor[this.state.i[7]][this.state.iP[7]]}onClick={() => circleClick7(this.state.id[7],7)} className="App-logo7" alt="logo" id={this.state.id[7]} height={80}  width={80}/>
        <img src={clickM}onClick={() => clickMe()} className="App-logoC" alt="logo" id={this.state.id[8]} height={600}  width={600} />
        <p>Clicks: {this.state.clicks[0]}!</p>
        <p>Preference Screen!</p>
        <Link to="/Results"><button>Results</button></Link>


      
      </div>
    );
  }
}

export default Preference;