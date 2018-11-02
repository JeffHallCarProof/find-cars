import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
  } from 'react-native';
import _ from 'lodash';
import { Link} from 'react-router-dom';

class App extends Component {

  render() {

    return (

      <View style={{flex:1, backgroundColor: '#FFFFFF'}}>

        <View style={styles.container}>
          <View style={styles.iContainer}>
            <Image source={require('./assets/Guy-Hero.png')} style={{width: 202, height: 110}}></Image>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.titleText}>Let us find the right car for you.</Text>
          <View style={{paddingTop: 20}}>
            <Text style={styles.contentText}>Lorizzle ipsizzle dolizzle sit amet, sizzle adipiscing elit. Sheezy i saw beyonces tizzles and my pizzle went crizzle velizzle, aliquet volutpizzle, suscipizzle quizzle, gravida vel, boofron.</Text>
          </View>
          
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
      paddingVertical: 50
    },

    btext: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 19,
      fontFamily: "Roboto"
    },

    titleText: {
      paddingBottom: 0,
      fontSize: 24,
      textAlign: "center",
      lineHeight: 28,
      fontWeight: '300',
      fontFamily: "Roboto"
    },

    contentText: {
      paddingBottom: 89,
      paddingHorizontal: 20,
      fontSize: 14,
      textAlign: "center",
      lineHeight: 30,
      fontFamily: "Roboto"
    },
    buttonContainer: {
      paddingBottom: 0,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
    },

    button: {
      alignItems: 'center',
      backgroundColor: '#1294EF',
      justifyContent: 'center',
      borderRadius: 4,
      width: 318,
      height: 60,
    },
  });

export default App;