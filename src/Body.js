import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
  } from 'react-native';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import sedan from './assets/BodyType/SedanBox@1x.svg'
import sedanH from './assets/BodyType/SedanBox@1xH.svg'
import suv from './assets/BodyType/SUVBox@1x.svg'
import suvH from './assets/BodyType/SUVBox@1xH.svg'
import cab from './assets/BodyType/CabBox@1x.svg'
import cabH from './assets/BodyType/CabBox@1xH.svg'
import hatchback from './assets/BodyType/HatchbackBox@1x.svg'
import hatchbackH from './assets/BodyType/HatchbackBox@1xH.svg'
import coupe from './assets/BodyType/CoupeBox@1x.svg'
import coupeH from './assets/BodyType/CoupeBox@1xH.svg'
import convertible from './assets/BodyType/ConvertibleBox@1x.svg'
import convertibleH from './assets/BodyType/ConvertibleBox@1xH.svg'
import wagon from './assets/BodyType/WagonBox@1x.svg'
import wagonH from './assets/BodyType/WagonBox@1xH.svg'
import minivan from './assets/BodyType/MinivanBox@1x.svg'
import minivanH from './assets/BodyType/MinivanBox@1xH.svg'
import diesel from './assets/BodyType/DieselBox@1x.svg'
import dieselH from './assets/BodyType/DieselBox@1xH.svg'
// Screen for vehicle class selection
class Body extends React.Component {

    state = {
      c1: true,
      c2: false,
      c3: false,
      c4: false,
      c5: false,
      c6: false,
      c7: false,
      c8: false,
      c9: false,
      eventId: this.props.match.params.eventId,
      lowerBound: this.props.match.params.lowerBound,
      upperBound: this.props.match.params.upperBound,
      classId: 'Sedan',
    };

    render() {

      return (

        <View style={styles.container}>

          <View style={{backgroundColor: '#FFFFFF', height: 60, justifyContent: 'center', boxShadow: `0px 2px 4px 0px rgba(0,0,0,0.17)`}}>
            <View style={{position: 'absolute', left: 15}}>
              <Link to={`/Budget/${this.state.eventId}`} style={{ textDecoration: 'none' }}>
                <TouchableHighlight underlayColor={'#FFFFFF'}>
                  <Image source={require('./assets/Path.png')} style={{width: 12, height: 21}}></Image>
                </TouchableHighlight>
              </Link>
            </View>
            <View style={{alignSelf: 'center'}}><Image source={require('./assets/CARFAX-Canada.png')} style={{width: 123, height: 31}}></Image></View>
          </View>

          <View style={{paddingTop: 30}}>
            <Text style={{fontSize: 24, fontWeight: '300', lineHeight: 25, textAlign: 'center', fontFamily: 'Roboto'}}>Preferred body type</Text>
          </View>
          <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
            <Text style={{fontSize: 14, lineHeight: 30, textAlign: 'center', fontFamily: 'Roboto'}}>Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the.</Text>
          </View>
          <View style={styles.bcontainer}>
          {/*Sedan*/} 
          { this.state.c1 ? 
          <img src={sedanH}alt="logo" width={'25%'} height={'25%'}  onClick={() => {this.setState({c1: true, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}/>
            : <img src={sedan}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: true, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}/>}
          <View style={{paddingHorizontal: 5}}></View>
          {/*SUV*/}
          { this.state.c2 ? 
          <img src={suvH}alt="logo" width={'25%'} height={'25%'}  onClick={() => {this.setState({c1: false, c2: true, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}/>
            : <img src={suv}alt="logo" width={'25%'} height={'25%'}  onClick={() => {this.setState({c1: false, c2: true, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}/>}
          <View style={{paddingHorizontal: 5}}></View>
          {/*Cab*/}
          { this.state.c3 ? 
          <img src={cabH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: true, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}/>
            : <img src={cab}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: true, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}/>}          
          </View><View style={styles.bcontainer2}>
          {/*HatchBack*/}
          { this.state.c4 ? 
          <img src={hatchbackH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: true, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}/>
            : <img src={hatchback}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: true, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}/>}               
          <View style={{paddingHorizontal: 5}}></View>
          {/*Coupe*/}
          { this.state.c5 ? 
          <img src={coupeH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: true, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}/>
            : <img src={coupe}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: true, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}/>}
          <View style={{paddingHorizontal: 5}}></View>
          {/*Convertible*/}
          { this.state.c6 ? 
          <img src={convertibleH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: true,c7: false, c8: false, c9: false},this._onPress(),500)}}/>
            : <img src={convertible}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: true,c7: false, c8: false, c9: false},this._onPress(),500)}}/>}            
            </View><View style={styles.bcontainer3}>
          {/*Wagon*/}
          { this.state.c7 ? 
          <img src={wagonH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: true, c8: false, c9: false},this._onPress(),500)}}/>
            : <img src={wagon}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: true, c8: false, c9: false},this._onPress(),500)}}/>} 
          <View style={{paddingHorizontal: 5}}></View>
          {/*Minivan*/}
          { this.state.c8 ? 
          <img src={minivanH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: true, c9: false},this._onPress(),500)}}/>
            : <img src={minivan}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: true, c9: false},this._onPress(),500)}}/>} 
          <View style={{paddingHorizontal: 5}}></View>
          {/*Diesel*/}
          { this.state.c9 ? 
          <img src={dieselH}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: true},this._onPress(),500)}}/>
            : <img src={diesel}alt="logo" width={'25%'} height={'25%'} onClick={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: true},this._onPress(),500)}}/>} 
          </View>
          
          <View style={styles.navContainer}>
            <View style={styles.navCircles}><View style={styles.circle}/></View>
            <View style={styles.navCircles}><View style={styles.circle}/></View>
            <View style={styles.navCircles}><View style={styles.activeNav}/></View>
            <View style={styles.navCircles}><View style={styles.circle}/></View>
          </View>

          <View style={styles.button2container}>
            <Link to={`/Preferences/${this.state.eventId}/${this.state.lowerBound}/${this.state.upperBound}/${this.state.classId}`} style={{ textDecoration: 'none' }}>
              <TouchableHighlight
                underlayColor={'#0018A8'}
                style={styles.button2}
              >
                <Text style={styles.btext3}> NEXT </Text>
              </TouchableHighlight>
            </Link>
          </View>

        </View>

      ); //End of return
    } //End of render

    _onPress =_.throttle(() =>{ 
      
      if(this.state.c1 === true){
        this.setState({classId: 'Sedan'})
      } else if(this.state.c2 === true) {
        this.setState({classId: 'SUV'})
      } else if(this.state.c3 === true) {
        this.setState({classId: 'Cab'})
      } else if(this.state.c4 === true) {
        this.setState({classId: 'Hatchback'})
      } else if(this.state.c5 === true) {
        this.setState({classId: 'Coupe'})
      } else if(this.state.c6 === true) {
        this.setState({classId: 'Convertible'})
      } else if(this.state.c7 === true) {
        this.setState({classId: 'Wagon'})
      } else if(this.state.c8 === true) {
        this.setState({classId: 'Minivan'})
      } else if(this.state.c9 === true) {
        this.setState({classId: 'Diesel'})
      }
    },0,{leading:false, trailing:true});

    _goBack =_.throttle(() =>{ 

    },1000,{leading:true, trailing:false});

  } //End of class

  //Component css
  const styles = StyleSheet.create({

    container: {
      alignContent: "center",
      backgroundColor: '#FAFAFA',
      height: '100%'
    },

    bcontainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      flexDirection: 'row',
    },

    bcontainer2: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },

    bcontainer3: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      flexDirection: 'row',
    },

    btext: {
      color: '#989898',
      alignItems: 'center',
      justifyContent: 'center',
    },

    btext2: {
      color: '#1294EF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    btext3: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 19
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      width: 90,
      height: 90,
      borderColor: '#D8D8D8',
      borderWidth: 1,
    },

    buttonT: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0018A8',
      padding: 20,
      paddingHorizontal: 10,
      borderRadius: 4,
      width: 100,
      height: 100,
      borderColor: '#1653bc',
      borderWidth: 1,
    },

    button2: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1294EF',
      borderRadius: 4,
      width: 94,
      height: 43,
    },
    
    button2container: {
      position: "absolute",
      bottom: 20,
      right: 10
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
      position: "relative",
      bottom: -18
    },

    navCircles: {
      paddingHorizontal: 4
    }

});

export default Body;