import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import _ from 'lodash';
import { Link } from 'react-router-dom';
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
  classId: this.props.match.params.classId,
  responseJson: [],
  loading: false,
}

  render() {


//Actual Preference code
    let click = this.state.clicks.slice();
    let i0 = this.state.pColor.slice();
    let ip = this.state.iP.slice();
    var numArray = this.state.clicks[0].toString()+this.state.clicks[1].toString()+this.state.clicks[2].toString()+this.state.clicks[3].toString()+this.state.clicks[4].toString()+this.state.clicks[5].toString()+this.state.clicks[6].toString()+this.state.clicks[7].toString();

    //Comfort Al1
    const circleClick0 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id, 1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
        TweenLite.to("#Al8", 1,{ease: Expo.easeOut,y:-10})
        TweenLite.to("#Al3", 1,{ease: Expo.easeOut,x:-10})
        click[cl]=2
        ip[cl]=1
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,y:-15})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-15})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:0,y:0})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:0,y:0})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    }

    //InteriorDesign Al2
    const circleClick1 = (id,cl) => {;
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:10})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,y:10})
        click[cl]=2
        ip[cl]=1
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:15})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,y:15})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:0 ,y:0})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:0 ,y:0})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    }
    
    //ExteriorDesign Al3
    const circleClick2 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-10, y:-10})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-10, y:10})
        click[cl]=2
        ip[cl]=1
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-15, y:-15})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-15, y:15})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:0, y:0})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:0 ,y:0})
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
        click[cl]=2
        ip[cl]=1
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    
    //Performance Al5    
    const circleClick4 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,y:10})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-10})
        click[cl]=2
        ip[cl]=1
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,y:15})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-15})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:0 ,y:0})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:0 ,y:0})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 

    //FunToDrive Al6
    const circleClick5 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,y:-10})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:10})
        click[cl]=2
        ip[cl]=1
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,y:-15})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:15})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:0 ,y:0})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:0 ,y:0})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 

    //FuelEconomy Al7
    const circleClick6 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:10, y:-10})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:10, y:10})
        click[cl]=2
        ip[cl]=1
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:15, y:-15})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:15, y:15})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:0,y:0})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:0 ,y:0})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    }

    //Reliability Al8
    const circleClick7 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-10, y:-10})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:10, y:-10})
        click[cl]=2
        ip[cl]=1
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-15, y:-15})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:15, y:-15})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:0, y:0})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:0 ,y:0})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    }
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    return (

      <View style={styles.container}>
      
        <View style={{backgroundColor: '#FFFFFF', height: 60, justifyContent: 'center', boxShadow: `0px 2px 4px 0px rgba(0,0,0,0.17)`}}>
          <View style={{position: 'absolute', left: 15}}>
            <Link to={`/Body/${this.state.eventId}/${this.state.lowerBound}/${this.state.upperBound}`} style={{ textDecoration: 'none' }}>
              <TouchableHighlight underlayColor={'#FFFFFF'}>
                <Image source={require('./assets/Path.png')} style={{width: 12, height: 21}}></Image>
              </TouchableHighlight>
            </Link>
          </View>
          <View style={{alignSelf: 'center'}}><Image source={require('./assets/CARFAX-Canada.png')} style={{width: 123, height: 31}}></Image></View>
        </View>

        <View style={{paddingTop: 35}}>
          <Text style={{fontSize: 24,lineHeight: 28, textAlign: 'center',fontFamily: 'Roboto'}}>Personal preferences</Text>
        </View>
        <View style={{paddingTop: 14, paddingHorizontal: 10}}>
          <Text style={{fontSize: 14, lineHeight: 30, textAlign: 'center',fontFamily: 'Roboto'}}>1 tap means you <B>like it</B>, 2 taps means you <B>love it</B>.
Let us know what’s most important to you.</Text>
        </View>

        <View style={styles.navContainer}>
          <View style={styles.navCircles}><View style={styles.circle}/></View>
          <View style={styles.navCircles}><View style={styles.circle}/></View>
          <View style={styles.navCircles}><View style={styles.circle}/></View>
          <View style={styles.navCircles}><View style={styles.activeNav}/></View>
        </View>

        <View style={styles.buttonContainer}>
          
          <Link to={`/Results/${this.state.eventId}/${this.state.lowerBound}/${this.state.upperBound}/${this.state.classId}/${numArray}`} style={{ textDecoration: 'none' }}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
            >
              <Text style={styles.btext}> FIND MY CAR </Text>
            </TouchableHighlight>
          </Link>
          
        </View>

        <div className='bubbles' >
          <img src={this.state.pColor[this.state.i[0]][this.state.iP[0]]}onClick={() => circleClick0(this.state.id[0],0)} className="App-logo0" alt="logo" id={this.state.id[0]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[1]][this.state.iP[1]]}onClick={() => circleClick1(this.state.id[1],1)} className="App-logo1" alt="logo" id={this.state.id[1]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[2]][this.state.iP[2]]}onClick={() => circleClick2(this.state.id[2],2)} className="App-logo2" alt="logo" id={this.state.id[2]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[3]][this.state.iP[3]]}onClick={() => circleClick3(this.state.id[3],3)} className="App-logo3" alt="logo" id={this.state.id[3]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[4]][this.state.iP[4]]}onClick={() => circleClick4(this.state.id[4],4)} className="App-logo4" alt="logo" id={this.state.id[4]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[5]][this.state.iP[5]]}onClick={() => circleClick5(this.state.id[5],5)} className="App-logo5" alt="logo" id={this.state.id[5]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[6]][this.state.iP[6]]}onClick={() => circleClick6(this.state.id[6],6)} className="App-logo6" alt="logo" id={this.state.id[6]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[7]][this.state.iP[7]]}onClick={() => circleClick7(this.state.id[7],7)} className="App-logo7" alt="logo" id={this.state.id[7]} height={'10%'}  width={'21%'}/>
        </div>

      </View>
      
    );
  }
}

export default Preference;

const styles = StyleSheet.create({

  container: {
    alignContent: "center",
    backgroundColor: '#FAFAFA',
    height: '100%'
  },

  btext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19,
    fontFamily: 'Roboto'
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#1294EF',
    justifyContent: 'center',
    borderRadius: 4,
    height: 44,
  },

  button2Container: {
    alignSelf: 'center',
    position: "absolute",
    bottom: '0.4%',
    right: '0.4%',
    left: '0.4%',
    width: '99%'
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: '2.5%',
    left: '2.5%',
    width: '95%'
  },
  circle: {
    width: 13,
    height: 13,
    borderRadius: 50,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    backgroundColor: '#FFFFFF'
  },

  activeNav: {
    width: 13,
    height: 13,
    borderRadius: 50,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    backgroundColor: '#1294EF'
  },

  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 53,
    bottom: -304
  },

  navCircles: {
    paddingHorizontal: 4
  },

  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
    position: "absolute",
    top: '0%',
    right: '0%',
    left: '0%',
    bottom: '0%',
  }

});
