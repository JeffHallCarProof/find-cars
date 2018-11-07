import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Modal
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
import Loader from 'react-loader-spinner'
import { Redirect } from 'react-router-dom'


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
  toNext: false,
}



async getHelloW(numArray) {
  // sample Url    https://productlab.carfax.ca/findmycar/multi/eventid/class/MAX/MIN/PREFERENCES/cargospace
  this.setState({loading: true});
  const url = "https://productlab.carfax.ca/findmycar/multi/"+this.state.eventId+"/"+this.state.classId+"/"+this.state.upperBound+"/"+this.state.lowerBound+"/"+11111111+"/"+0;
  
  
  try{
  const res = await fetch(url,console.log(url),{
    method:'GET',
    mode: 'no-cors',
    headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          "type": "select",
          "args": {
            "table": "author",
            "columns": [
              "Budget",
              "BuildQualityRating",
              "ComfortRating",
              "ExteriorDesignRating",
              "FuelEconomyRating",
              "FunToDriveRating",
              "InteriorDesignRating ",
              "Make",
              "Model",
              "PerformanceRating",
              "ReliabilityRating",
              "Score",
              "URL"

            ]
        }
        }),
    })
    const rJson = await res.json();
    const ETC1 = await this.setState({responseJson: rJson});
    const ETC2 = await this.setState({loading: false});
    
    console.log(this.state.responseJson[0])
    console.log(this.state.responseJson[1])
    console.log(this.state.responseJson[2])
    console.log(this.state.responseJson[3])
    console.log(this.state.responseJson[4])
    const ETC3 = await this.setState({toNext: true});
  }catch(err){
    return console.error(err);
  }

};
  render() {
    //this is what links to results screen after the fetch
    if (this.state.toNext === true) {
let fuck = (this.state.responseJson.slice())
console.log(fuck)
      return <Redirect to={`/Results/${fuck}`} style={{ textDecoration: 'none' }}/>
      //return <Redirect to={`/`} />
    }

//Actual Preference code
    let click = this.state.clicks.slice();
    let i0 = this.state.pColor.slice();
    let ip = this.state.iP.slice();


    //Comfort Al1
    const circleClick0 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id, 1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25, x:-20})
        TweenLite.to("#Al8", 1,{ease: Expo.easeOut,x:-5 ,y:-40})
        TweenLite.to("#Al3", 1,{ease: Expo.easeOut,x:-24 ,y:10})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5, x:-25})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-1 ,y:-44})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-30 ,y:20})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1, x:-15})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-10 ,y:-38})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-18 ,y:5})
        
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
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:-22 ,y:40})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-15,y:-5})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-6 ,y:50})
        click[cl]=2
        ip[cl]=1
        
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:-32 ,y:50})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-20,y:-10})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-3 ,y:55})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:-18 ,y:40})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-10, y:20})
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
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-20})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-6 ,y:-38})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:20 ,y:-45})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:50 ,y:-14})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:30 ,y:26})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-2 ,y:45})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-22 ,y:40})
        click[cl]=2
        ip[cl]=1
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5})
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,x:0 ,y:0})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-25})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-8 ,y:-45})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:24 ,y:-50})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:55 ,y:-16})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:40 ,y:30})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:2 ,y:50})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-32 ,y:50})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        click[cl]=1
        ip[cl]=0
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1})
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,x:0 ,y:0})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-15})
        TweenLite.to("#Al8",1,{ease: Expo.easeOut,x:-5 ,y:-36})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:18 ,y:-40})
        TweenLite.to("#Al7",1,{ease: Expo.easeOut,x:45 ,y:-8})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:24 ,y:22})
        TweenLite.to("#Al5",1,{ease: Expo.easeOut,x:-6 ,y:40})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-18 ,y:40})
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 
    
    //Performance Al5    
    const circleClick4 = (id,cl) => {
      if(this.state.clicks[cl]===1)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.25, scaleY:1.25,x:-2 ,y:37})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:40 ,y:15})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-24 ,y:40})
        click[cl]=2
        ip[cl]=1
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:-5 ,y:45})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:44 ,y:20})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-28 ,y:50})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:0 ,y:30})
        TweenLite.to("#Al2",1,{ease: Expo.easeOut,x:32 ,y:13})
        TweenLite.to("#Al3",1,{ease: Expo.easeOut,x:-18 ,y:39})
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
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-29})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:20 ,y:-45})
        click[cl]=2
        ip[cl]=1
      }
      else if(this.state.clicks[cl]===2)
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1.5, scaleY:1.5,x:-7 ,y:-44})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-34})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:24 ,y:-50})
        click[cl]=3
        ip[cl]=2
      }
      else
      {
        TweenLite.to("#"+id,1,{ease: Expo.easeOut,scaleX:1, scaleY:1,x:-5 ,y:-18})
        TweenLite.to("#Al1",1,{ease: Expo.easeOut,x:-24})
        TweenLite.to("#Al6",1,{ease: Expo.easeOut,x:18 ,y:-40})
        click[cl]=1
        ip[cl]=0
      }
      this.setState({clicks: click,pColor: i0, iP: ip });
    } 

    return (

      <View style={styles.container}>
      
       
        <View style={{backgroundColor: '#FFFFFF', height: 60, alignItems: "center", justifyContent: "center", boxShadow: `0px 2px 4px 0px rgba(0,0,0,0.17)`}}>
          <Image source={require('./assets/CARFAX-Canada.png')} style={{width: 123, height: 31}}></Image>
        </View>

        <View style={{paddingTop: 10}}>
          <Text style={{fontSize: 24, fontWeight: '300', lineHeight: 28, textAlign: 'center'}}>Personal preferences</Text>
        </View>
        <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
          <Text style={{fontSize: 14, lineHeight: 30, textAlign: 'center'}}>Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Link style={{ textDecoration: 'none' }} onClick={_.debounce(() => this.getHelloW())}to={`/Results/${this.state.responseJson}`}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {})}
            >
              <Text style={styles.btext}> NEXT </Text>
            </TouchableHighlight >
          </Link>
        </View>

        <div className='bubbles' >
          <img src={this.state.pColor[this.state.i[0]][this.state.iP[0]]}onClick={() => circleClick0(this.state.id[0],0)} className="App-logo" alt="logo" id={this.state.id[0]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[1]][this.state.iP[1]]}onClick={() => circleClick1(this.state.id[1],1)} className="App-logo1" alt="logo" id={this.state.id[1]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[2]][this.state.iP[2]]}onClick={() => circleClick2(this.state.id[2],2)} className="App-logo2" alt="logo" id={this.state.id[2]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[3]][this.state.iP[3]]}onClick={() => circleClick3(this.state.id[3],3)} className="App-logo3" alt="logo" id={this.state.id[3]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[4]][this.state.iP[4]]}onClick={() => circleClick4(this.state.id[4],4)} className="App-logo4" alt="logo" id={this.state.id[4]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[5]][this.state.iP[5]]}onClick={() => circleClick5(this.state.id[5],5)} className="App-logo5" alt="logo" id={this.state.id[5]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[6]][this.state.iP[6]]}onClick={() => circleClick6(this.state.id[6],6)} className="App-logo6" alt="logo" id={this.state.id[6]} height={'10%'}  width={'21%'}/>
          <img src={this.state.pColor[this.state.i[7]][this.state.iP[7]]}onClick={() => circleClick7(this.state.id[7],7)} className="App-logo7" alt="logo" id={this.state.id[7]} height={'10%'}  width={'21%'}/>
        </div>
        { this.state.loading ? 
          <div className='notbubbles'>
              <View style={styles.modalBackground}>
                <Loader type="Circles" color="#65B2EE" height="100" width="100" justifyContent='center' alignItems='center'/>
              </View>
          </div> : null }
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
  },
  btext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#1294EF',
    justifyContent: 'center',
    borderRadius: 4,
    width: 300,
    height: 60,
  },

  buttonContainer: {
    alignSelf: 'center',
    position: "absolute",
    bottom: 10,
  },

  circle: {
    width: 13,
    height: 13,
    borderRadius: 50,
    borderColor: '#D8D8D8',
    borderWidth: 1
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
    position: 'relative'
  },

  navCircles: {
    paddingHorizontal: 4
  }

});
