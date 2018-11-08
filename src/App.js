import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
  } from 'react-native';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {

    return (

      <View style={{height: '100%', backgroundColor: '#FAFAFA', alignContent: 'center'}}>

        <View style={{backgroundColor: '#FFFFFF', height: 60, alignItems: "center", justifyContent: "center", boxShadow: `0px 2px 4px 0px rgba(0,0,0,0.17)`}}>
          <View  style={{position: 'absolute', left: 125, top: 17}}><Image source={require('./assets/CARFAX-Canada.png')} style={{width: 123, height: 31}}></Image></View>
        </View>

        <View style={styles.container}>
          <View style={styles.iContainer}>
            <Image source={require('./assets/Guy-Hero.png')} style={{width: 202, height: 110}}></Image>
          </View>
          <Text style={styles.titleText}>Let us find the right car for you.</Text>
          <Text style={styles.contentText}>Lorizzle ipsizzle dolizzle sit amet, sizzle adipiscing elit. Sheezy i saw beyonces tizzles and my pizzle went crizzle velizzle, aliquet volutpizzle, suscipizzle quizzle, gravida vel, boofron.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Link to="/Events" style={{ textDecoration: 'none' }}>
            <TouchableHighlight
              underlayColor={'#0018A8'}
              style={styles.button}
              onPress={_.debounce(() => {this._onPress()},400)}
            >
              <Text style={styles.btext}> GET STARTED </Text>
            </TouchableHighlight>
          </Link>
        </View>
        
      </View>

      ); //End of return
    } //End of render

    _onPress =_.throttle(() =>{

    },1000,{leading:true, trailing:false}); //End of button function

  } //End of class

  const styles = StyleSheet.create({
    
    container: {
      alignItems: "center",
      justifyContent: "space-between"
    },

    iContainer: {
      alignItems: "center",
      paddingVertical: 20
    },

    btext: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 19,
    },

    titleText: {
      fontSize: 24,
      textAlign: "center",
      lineHeight: 28,
      fontWeight: '300',
      paddingHorizontal: 28
    },

    contentText: {
      paddingBottom: 59,
      paddingHorizontal: 20,
      fontSize: 14,
      textAlign: "center",
      lineHeight: 30,
      paddingTop: 20
    },

    buttonContainer: {
      alignItems: 'center',
      position: "relative",
      bottom: 20
    },

    button: {
      alignItems: 'center',
      backgroundColor: '#1294EF',
      justifyContent: 'center',
      borderRadius: 4,
      width: 300,
      height: 60,
    },
  });

export default App;