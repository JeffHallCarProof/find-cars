import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import _, {debounce} from 'lodash';
import { TweenLite, Expo} from 'gsap';
import Loader from 'react-loader-spinner'


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
    async getHelloW(){
      const url = "https://productlab.carfax.ca/findmycar/multi/1/convertible/50000/6000/21232132/7";
      try{
      const res = await fetch(url,console.log(url),{
        method:'GET',
        headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
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
                  "Score"
                ]
            }
            }),
        })
        const rJson = await res.json();
        const ETC1 = await this.setState({responseJson: rJson});
        const ETC2 = await this.setState({loading: false});
        console.log(this.state.responseJson)
      }catch(err){
        return console.error(err);
      }

    };
    //go back function
    _goBack =_.throttle(() =>{ 
    },1000,{leading:true, trailing:false});

  


    render() {
console.log(this.props.match.params.responseJson)
      return (
            
        <View style={styles.container}>
        <View style={{backgroundColor: '#FFFFFF', height: 60, alignItems: "center", justifyContent: "center", boxShadow: `0px 2px 4px 0px rgba(0,0,0,0.17)`}}>
          <Image source={require('./assets/CARFAX-Canada.png')} style={{width: 123, height: 31}}></Image>
        </View>

        <View style={{paddingTop: 10}}>
          <Text style={{fontSize: 24, fontWeight: '300', lineHeight: 28, textAlign: 'center'}}>RESULTS</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontSize: 14, fontWeight: '300', lineHeight: 28, textAlign: 'center'}}>{this.props.match.params.responseJson}</Text>
        </View>
        { this.state.loading ? 
          <div className='notbubbles'>
              <View style={styles.modalBackground}>
                <Loader type="Oval" color="#65B2EE" height="40" width="40" justifyContent='center' alignItems='center'/>
              </View>
          </div> : null }
        </View>

        ); //End of return
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