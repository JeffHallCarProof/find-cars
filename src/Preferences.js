import React, { Component } from 'react';
import Ratio from 'react-ratio';
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
  eventId: this.props.match.params.eventId,
  lowerBound: this.props.match.params.lowerBound,
  upperBound: this.props.match.params.upperBound,
  classId:this.props.match.params.classId,
}

  render() {
    let click = this.state.clicks.slice();
    let i0 = this.state.pColor.slice();
    let ip = this.state.iP.slice();
console.log(this.state.eventId)
console.log(this.state.lowerBound)
console.log(this.state.upperBound)
console.log(this.state.classId)

    //Comfort Al1
    const circleClick0 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id, 1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
        TweenLite.to("#Al8", 1,{ease: Expo.easeOut,x:-5 ,y:-40})
        TweenLite.to("#Al3", 1,{ease: Expo.easeOut,x:-42 ,y:40})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-1 ,y:-44})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-48 ,y:50})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-10 ,y:-38})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-38 ,y:20})
        
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    //InteriorDesign Al2
    const circleClick1 = (id,cl) => {;
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:30 ,y:13})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:45 ,y:-15})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-2 ,y:50})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:40 ,y:18})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:50 ,y:-25})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-5 ,y:55})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:27 ,y:10})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:40 ,y:-14})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:0 ,y:45})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    }
    
    //ExteriorDesign Al3
    const circleClick2 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:-42 ,y:40})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-50,y:-5})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-6 ,y:50})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:-48 ,y:50})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-55,y:-10})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-3 ,y:55})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:-38 ,y:40})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-46, y:20})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-17 ,y:47})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    //BuildQuality Al4
    //All animation must respect this set of animations
    const circleClick3 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,x:0 ,y:0})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-45})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-6 ,y:-38})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:20 ,y:-45})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:50 ,y:-14})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:30 ,y:26})
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
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:55 ,y:-16})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:40 ,y:30})
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
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:45 ,y:-8})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:24 ,y:22})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-6 ,y:40})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-38 ,y:40})
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    
    //Performance Al5    
    const circleClick4 = (id,cl) => {
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
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:0 ,y:30})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:32 ,y:13})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-36 ,y:39})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    //FunToDrive Al6
    const circleClick5 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:20,y:-45})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-2 ,y:-40})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:47 ,y:-24})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:24,y:-50})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-8 ,y:-45})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:50 ,y:-16})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1, x:18,y:-40})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:20 ,y:-38})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:43 ,y:-28})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    //FuelEconomy Al7
    const circleClick6 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:45 ,y:-15})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:20,y:-40})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:36 ,y:13})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:50 ,y:-25})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:12,y:-45})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:40 ,y:18})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:40 ,y:-14})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:22,y:-35})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:34 ,y:10})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    //Reliability Al8
    const circleClick7 = (id,cl) => {
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

    TweenLite.to("#Al1",0,{ease: Expo.easeOut,scaleX:0, scaleY:0})
    TweenLite.to("#Al2",0,{ease: Expo.easeOut,scaleX:0, scaleY:0})
    TweenLite.to("#Al3",0,{ease: Expo.easeOut,scaleX:0, scaleY:0})
    TweenLite.to("#Al4",0,{ease: Expo.easeOut,scaleX:0, scaleY:0})
    TweenLite.to("#Al5",0,{ease: Expo.easeOut,scaleX:0, scaleY:0})
    TweenLite.to("#Al6",0,{ease: Expo.easeOut,scaleX:0, scaleY:0})
    TweenLite.to("#Al7",0,{ease: Expo.easeOut,scaleX:0, scaleY:0})
    TweenLite.to("#Al8",0,{ease: Expo.easeOut,scaleX:0, scaleY:0})
    TweenLite.to("#Alc",1,{ease: Expo.easeOut,scaleX:0, scaleY:0})
    TweenLite.to("#Al1",3,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al2",3,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al3",3,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al4",3,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al5",3,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al6",3,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al7",3,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al8",3,{ease: Expo.easeOut,scaleX:1, scaleY:1})
    TweenLite.to("#Al1",5,{ease: Expo.easeOut,x:-30},1000)
    TweenLite.to("#Al8",5,{ease: Expo.easeOut,x:'-5%' ,y:-36},1000)
    TweenLite.to("#Al6",5,{ease: Expo.easeOut,x:'18%' ,y:-40},1000)
    TweenLite.to("#Al7",5,{ease: Expo.easeOut,x:'45%' ,y:-26},1000)
    TweenLite.to("#Al2",5,{ease: Expo.easeOut,x:'27%' ,y:10},1000)
    TweenLite.to("#Al5",5,{ease: Expo.easeOut,x:'-6%' ,y:40},1000)
    TweenLite.to("#Al3",5,{ease: Expo.easeOut,x:'-38%' ,y:40},1000)
    } 

    return (

   <div className="App" height={1334} width={750}  >

      <p >Preference Screen!</p>
       <div className='bubbles' >
       <div className ='notBubbles'>

        
<div className='buttonContainer'>
<button>
  <Link to="/">
       Results
  </Link>
  </button>
</div>
</div >

        <img src={this.state.pColor[this.state.i[3]][this.state.iP[3]]}onClick={() => circleClick3(this.state.id[3],3)} className="App-logo3" alt="logo" id={this.state.id[3]} height={'18%'}  width={'18%'}/>
        <img src={this.state.pColor[this.state.i[0]][this.state.iP[0]]}onClick={() => circleClick0(this.state.id[0],0)} className="App-logo" alt="logo" id={this.state.id[0]} height={'18%'}  width={'18%'} />
        <img src={this.state.pColor[this.state.i[1]][this.state.iP[1]]}onClick={() => circleClick1(this.state.id[1],1)} className="App-logo1" alt="logo" id={this.state.id[1]} height={'18%'}  width={'18%'}/>
        <img src={this.state.pColor[this.state.i[2]][this.state.iP[2]]}onClick={() => circleClick2(this.state.id[2],2)} className="App-logo2" alt="logo" id={this.state.id[2]} height={'18%'}  width={'18%'}/>
        
        <img src={this.state.pColor[this.state.i[4]][this.state.iP[4]]}onClick={() => circleClick4(this.state.id[4],4)} className="App-logo4" alt="logo" id={this.state.id[4]} height={'18%'}  width={'18%'}/>
        <img src={this.state.pColor[this.state.i[5]][this.state.iP[5]]}onClick={() => circleClick5(this.state.id[5],5)} className="App-logo5" alt="logo" id={this.state.id[5]} height={'18%'}  width={'18%'}/>
        <img src={this.state.pColor[this.state.i[6]][this.state.iP[6]]}onClick={() => circleClick6(this.state.id[6],6)} className="App-logo6" alt="logo" id={this.state.id[6]} height={'18%'}  width={'18%'}/>
        <img src={this.state.pColor[this.state.i[7]][this.state.iP[7]]}onClick={() => circleClick7(this.state.id[7],7)} className="App-logo7" alt="logo" id={this.state.id[7]} height={'18%'}  width={'18%'}/>


        </div>
        
      
      </div>
    );
  }
}

export default Preference;

//<img src={clickM}onClick={() => clickMe()} className="App-logoC" alt="logo" id={this.state.id[8]} height={800}  width={800} />