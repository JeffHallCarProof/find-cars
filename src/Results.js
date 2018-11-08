import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
  } from 'react-native';
import _, {debounce} from 'lodash';
import { TweenLite, Expo} from 'gsap';
import Loader from 'react-loader-spinner'
import { Line} from 'rc-progress';
import nextBtn from './assets/NextBTN@1x.svg'
import prevBtn from './assets/PrevBTN@1x.svg'
import { Link } from 'react-router-dom';

  //results screen
  class Results extends React.Component {

    static navigationOptions = {
      header: null,
      gesturesEnabled: false,
    };

    state = {
      overall:0,
      budget:0,
      comfort:0,
      fuelEco:0,
      safety:0,
      reliablitiy:0,
      environment:0,
      preformance:0,
      intStyle:0,
      extStyle:0,
      p1: true,
      p2: false,
      p3: false,
      offset: 0,
      i: 0,
      eventId: this.props.match.params.eventId,
      lowerBound: this.props.match.params.lowerBound,
      upperBound: this.props.match.params.upperBound,
      classId: this.props.match.params.classId,
      numArray: this.props.match.params.numArray,
      visibleModal: null, //Modal
      loading: true,
      responseJson: [],
      count: 0
    }

    //////////////////////////////////////Modal start
    _renderButton = (text, onPress) => (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonX}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  
    _renderModalContent = () => (
      <View style={styles.modalContent}>
        <Text>Hello!</Text>
        {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
      </View>
    );
    //////////////////////////////////////Modal end

    //api call
    async getHelloW() {
      // sample Url    https://productlab.carfax.ca/findmycar/multi/eventid/class/MAX/MIN/PREFERENCES/cargospace
      this.setState({loading: true});
      const url = "https://productlab.carfax.ca/findmycar/multi/"+this.state.eventId+"/"+this.state.classId+"/"+this.state.upperBound+"/"+this.state.lowerBound+"/"+this.state.numArray+"/"+0;
      
      
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
        
      }catch(err){
        return console.error(err);
      }
    
    };
    //go back function
    _go =_.throttle(() =>{ 
      this.getHelloW()
    },8000,{leading:true, trailing:false});

    _count = () =>{
      if(this.state.count ==4){
        this.setState({count: this.state.count-4})
      }else {
      this.setState({count: this.state.count+1})
      }
    }


    render() {
      
      if(this.state.loading ==true){
        this._go()
      }if(this.state.loading ==false){
        var i = this.state.count
        console.log(i)
      return (
            
        <View style={styles.container}>
        
        <View style={{backgroundColor: '#FFFFFF', height: 60, boxShadow: `0px 2px 4px 0px rgba(0,0,0,0.17)`}}>
          <View style={{position: 'absolute', right: 15, top: 17}}>
            <Link to={`/`} style={{ textDecoration: 'none' }}>
              <TouchableHighlight underlayColor={'#FFFFFF'}>
                <Image source={require('./assets/X-Close.png')} style={{width: 16, height: 17}}></Image>
              </TouchableHighlight>
            </Link>
          </View>
          <View style={{position: 'absolute', left: 125, top: 17}}><Image source={require('./assets/CARFAX-Canada.png')} style={{width: 123, height: 31}}></Image></View>
        </View>


        <View style={styles.containerData}>
        <View style={{ flexDirection: 'row', height: '50%', width: '100%', paddingHorizontal: 5,justifyContent: "space-between"}}>

          <img src={prevBtn} onClick={() => this._count()} style={{height: '100%',width: '50%', paddingRight: 5}} />
          <View style={{  height: '100%', width: '75%',justifyContent: "center",borderWidth: 1,borderTopWidth: 3, borderTopColor: '#1294EF',borderColor: '#BFBFBF',}}>
            <Image source={ this.state.responseJson[i].URL} style={{height: '70%',width: '100%',paddingBottom: 5 }}/>
            <Text style={{fontSize: 14, fontWeight: '300', lineHeight: 16, textAlign: 'center',height: '7.5%',width: '100%', }}>Body: {this.state.responseJson[i].Body_Type}</Text>
            <Text style={{fontSize: 14, fontWeight: '300', lineHeight: 16, textAlign: 'center',height: '7.5%',width: '100%',}}>Budget: {this.state.responseJson[i].Budget}</Text>
              <Text style={{fontSize: 14, fontWeight: '300', lineHeight: 16, textAlign: 'center',height: '7.5%',width: '100%',}}>Make: {this.state.responseJson[i].Make}</Text>
              <Text style={{fontSize: 14, fontWeight: '300', lineHeight: 16, textAlign: 'center',height: '7.5%',width: '100%',}}>Model: {this.state.responseJson[i].Model}</Text>
            </View>
            <img src={nextBtn} onClick={() => this._count()} style={{height: '100%',width: '50%', paddingLeft: 5}}/>
                  
          </View>

          <View style={{paddingTop: 20}}>
            <Line strokeWidth="4" strokeColor='#1294EF' width='200' style={{paddingBottom: 10,}} percent={(this.state.responseJson[i].Build_Quality_Rating)*96} />
            <Line strokeWidth="4" strokeColor='#1294EF' width='200' style={{paddingBottom: 10,}} percent={(this.state.responseJson[i].Comfort_Rating)*87} />
            <Line strokeWidth="4" strokeColor='#1294EF' width='200' style={{paddingBottom: 10,}} percent={(this.state.responseJson[i].Exterior_Design_Rating)*99} />
            <Line strokeWidth="4" strokeColor='#1294EF' width='200' style={{paddingBottom: 10,}} percent={(this.state.responseJson[i].Fuel_Economy_Rating)*92} />
            <Line strokeWidth="4" strokeColor='#1294EF' width='200' style={{paddingBottom: 10,}} percent={(this.state.responseJson[i].Fun_To_Drive_Rating)*89} />
            <Line strokeWidth="4" strokeColor='#1294EF' width='200' style={{paddingBottom: 10,}} percent={(this.state.responseJson[i].Interior_Design_Rating)*86} />
            <Line strokeWidth="4" strokeColor='#1294EF' width='200' style={{paddingBottom: 10,}} percent={(this.state.responseJson[i].Performance_Rating)*97} />
            <Line strokeWidth="4" strokeColor='#1294EF' width='200' style={{paddingBottom: 10,}} percent={(this.state.responseJson[i].Reliability_Rating)*94} />
            <Line strokeWidth="4" strokeColor='#1294EF' width='200' style={{paddingBottom: 10,}} percent={(this.state.responseJson[i].Score)*10} />
          </View>
        </View>
        { this.state.loading ? 
          <div className='notbubbles'>
              <View style={styles.modalBackground }>
              <Text style={styles.ltext}>ITS FUCKING LOADING</Text>
                <Loader type="Oval" color="#FFFFFF" height="40" width="40" justifyContent='center' alignItems='center'/>
              </View>
          </div> : null }
        </View>

        ); //End of return
      }
      return (
            
        <View style={styles.container}>

        { this.state.loading ? 
          <div className='notbubbles'>
              <View style={styles.modalBackground }>
              <Text style={styles.ltext}>ITS FUCKING LOADING</Text>
                <Loader type="Oval" color="#FFFFFF" height="40" width="40" justifyContent='center' alignItems='center'/>
              </View>
          </div> : null }
        </View>

        );
    } //End of render
} //End of class
export default Results;
//Component css
const styles = StyleSheet.create({

  container: {
    alignContent: "center",
    backgroundColor: '#FAFAFA',
    height: '100%'
  },
  containerData: {
    alignContent: "center",
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop: 20,
    position: "absolute",
    top: '10%',
    right: '0%',
    left: '0%',
    bottom: '0%',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1294EF',
    position: "absolute",
    top: '0%',
    right: '0%',
    left: '0%',
    bottom: '0%',
  },
  ltext: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
    paddingBottom: 50
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
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    width: 50,
    height: 50,
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