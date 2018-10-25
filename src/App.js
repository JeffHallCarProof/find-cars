import React, { Component } from 'react';
import logo from './assets/untitled1.svg';
import './App.css';
import { TimelineMax,TweenLite, Power4, TweenMax } from 'gsap';
class App extends Component {
/*
  componentDidMount(){
   var tl = new TimelineMax("#Alogo", 14,{repeat:-1});
   tl.to("#Alogo", 2, {scaleX:1, scaleY:1})
    .to("#Alogo", 2, {scaleX:2, scaleY:2})
    .to("#Alogo", 2, {scaleX:3, scaleY:3})
    .to("#Alogo", 2, {scaleX:1, scaleY:1});
}
*/
state = {
  clicks: [1,1,1,1,1,1,1,1],
  id: ['Al1','Al2','Al3','Al4','Al5','Al6','Al7','Al8']
}

  render() {
    const imageClick = (id,cl) => {
      let click = this.state.clicks.slice();
      console.log(id);
      if(this.state.clicks[cl]===1)
      {
        //this.setState({bs1: 2})
        TweenMax.to("#"+id, 2,{scaleX:1.5, scaleY:1.5})
        click[cl]=2
      }
      else if(this.state.clicks[cl]===2)
      {
        //this.setState({p2: false,bs1: 3})
        TweenMax.to("#"+id, 2,{scaleX:2, scaleY:2})
        click[cl]=3
      }
      else
      {
        //this.setState({p1: true,bs1: 1})
        TweenMax.to("#"+id, 2,{scaleX:1, scaleY:1})
        click[cl]=1
        
      }
      this.setState({clicks: click});
    } 

    return (
      <div className="App">
          <img src={logo}onClick={() => imageClick(this.state.id[0],0)} className="App-logo" alt="logo" id={this.state.id[0]} height={80}  width={80} ref={img => this.Alogo = img}    />
          <img src={logo}onClick={() => imageClick(this.state.id[1],1)} className="App-logo1" alt="logo" id={this.state.id[1]} height={80}  width={80} ref={img => this.Alogo = img}    />
          <img src={logo}onClick={() => imageClick(this.state.id[2],2)} className="App-logo2" alt="logo" id={this.state.id[2]} height={80}  width={80} ref={img => this.Alogo = img}    />
<p>Clicks: {this.state.clicks[0]}!</p>
      </div>
    );
  }
}

export default App;

