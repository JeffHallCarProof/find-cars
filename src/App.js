import React, { Component } from 'react';
import logo from './assets/circle_svg@1xgrey.svg';
import logo2 from './assets/circle_svg@1x.svg';
import logo3 from './assets/circle_svg@1xBlue.svg';
import './App.css';
import { TimelineMax,TweenLite, Power4, TweenMax,Linear,colorProps} from 'gsap';
class App extends Component {
/*
  componentDidMount(){
   var tl = new TimelineMax("#Al1", 14,{repeat:-1});
   tl.to("#Al1", 2, {scaleX:1.5, scaleY:1.5, ease:Linear.easeNone})
    .to("#Al1", 2, {fill:"#8FCAF3",scaleX:1, scaleY:1})
}
*/




state = {
  clicks: [1,1,1,1,1,1,1,1],
  id: ['Al1','Al2','Al3','Al4','Al5','Al6','Al7','Al8'],
  pColor: [logo,logo,logo,logo,logo,logo,logo,logo],
  i: [0,1,2,3,4,5,6,7]
}

  render() {
    const imageClick = (id,cl) => {
      let click = this.state.clicks.slice();
      let i0 = this.state.pColor.slice();
      console.log(id);
      if(this.state.clicks[cl]===1)
      {
        //this.setState({bs1: 2})
        TweenLite.to("#"+id, 2,{fill:"red",scaleX:1.5, scaleY:1.5})
        TweenLite.to("#"+id, 2,{colorProps:{fill:"#8FCAF3"}, ease:Linear.easeNone})
        i0[cl]=logo2
        click[cl]=2
        
      }
      else if(this.state.clicks[cl]===2)
      {
        //this.setState({p2: false,bs1: 3})
        TweenLite.to("#"+id, 2,{scaleX:2, scaleY:2})
        i0[cl]=logo3
        click[cl]=3
        
      }
      else
      {
        //this.setState({p1: true,bs1: 1})
        TweenLite.to("#"+id, 2,{scaleX:1, scaleY:1})
        i0[cl]=logo
        click[cl]=1
        
        
      }
      this.setState({clicks: click,pColor: i0 });
    } 

    return (
      <div className="App">
      
          <img src={this.state.pColor[this.state.i[0]]}onClick={() => imageClick(this.state.id[0],0)} className="App-logo" alt="logo" id={this.state.id[0]} height={80}  width={80} title="shit"/>
          <img src={this.state.pColor[this.state.i[1]]}onClick={() => imageClick(this.state.id[1],1)} className="App-logo1" alt="logo" id={this.state.id[1]} height={80}  width={80}/>
          <img src={this.state.pColor[this.state.i[2]]}onClick={() => imageClick(this.state.id[2],2)} className="App-logo2" alt="logo" id={this.state.id[2]} height={80}  width={80}/>
          <img src={this.state.pColor[this.state.i[3]]}onClick={() => imageClick(this.state.id[3],3)} className="App-logo3" alt="logo" id={this.state.id[3]} height={80}  width={80}/>
          <img src={this.state.pColor[this.state.i[4]]}onClick={() => imageClick(this.state.id[4],4)} className="App-logo4" alt="logo" id={this.state.id[4]} height={80}  width={80}/>
          <img src={this.state.pColor[this.state.i[5]]}onClick={() => imageClick(this.state.id[5],5)} className="App-logo5" alt="logo" id={this.state.id[5]} height={80}  width={80}/>
          <img src={this.state.pColor[this.state.i[6]]}onClick={() => imageClick(this.state.id[6],6)} className="App-logo6" alt="logo" id={this.state.id[6]} height={80}  width={80}/>
          <img src={this.state.pColor[this.state.i[7]]}onClick={() => imageClick(this.state.id[7],7)} className="App-logo7" alt="logo" id={this.state.id[7]} height={80}  width={80}/>
<p>Clicks: {this.state.clicks[0]}!</p>
      </div>
    );
  }
}

export default App;

