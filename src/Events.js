import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
  } from 'react-native';
import _, {debounce} from 'lodash';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screen for people who do not know what car they want
class Events extends React.Component {

    state = {
      e1: false,
      e2: false,
      e3: false,
      e4: false,
      e5: false,
      e6: false
    };

    render() {

      return (
        
        <View style={{flex:1}}>

          <View style={styles.container}>
          
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ paddingTop: 60, paddingLeft: 50, paddingRight: 50, fontWeight: 'bold', fontSize: 20}}>
                Reason for buying a new car
              </Text>
              <Text style={{ paddingTop: 20, paddingBottom: 20, paddingHorizontal: 50, textAlign: "center"}}>
                Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle.
              </Text>
            </View>

            <View style={styles.bcontainer}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: true, e2: false, e3: false, e4: false, e5: false, e6: false})}
              >
                <Text style={[styles.btext, this.state.e1 && styles.btext2]}> Event1 </Text>
              </TouchableHighlight><Text> </Text>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: false, e2: true, e3: false, e4: false, e5: false, e6: false})}
              >
                <Text style={[styles.btext, this.state.e2 && styles.btext2]}> Event2 </Text>
              </TouchableHighlight><Text> </Text>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: false, e2: false, e3: true, e4: false, e5: false, e6: false})}
              >
                <Text style={[styles.btext, this.state.e3 && styles.btext2]}> Event3 </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.bcontainer2}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: false, e2: false, e3: false, e4: true, e5: false, e6: false})}
              >
                <Text style={[styles.btext, this.state.e4 && styles.btext2]}> Event4 </Text>
              </TouchableHighlight><Text> </Text>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: false, e2: false, e3: false, e4: false, e5: true, e6: false})}
              >
                <Text style={[styles.btext, this.state.e5 && styles.btext2]}> Event5 </Text>
              </TouchableHighlight><Text> </Text>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={[styles.button]}
                onPress={() => this.setState({e1: false, e2: false, e3: false, e4: false, e5: false, e6: true})}
              >
                <Text style={[styles.btext, this.state.e6 && styles.btext2]}> Other </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.navContainer}>
            <View style={styles.navCircles}><View style={styles.activeNav}/></View>
            <View style={styles.navCircles}><View style={styles.circle}/></View>
            <View style={styles.navCircles}><View style={styles.circle}/></View>
            <View style={styles.navCircles}><View style={styles.circle}/></View>
          </View>

            <View style={styles.button2container}>
              <Link to="/Budget" style={{ textDecoration: 'none' }}>
                <TouchableHighlight
                    underlayColor={'#0018A8'}
                    style={styles.button2}
                    onPress={_.debounce(() => {this._onPress()},400)}
                >
                    <Text style={styles.btext3}> NEXT </Text>
                </TouchableHighlight>
            </Link>
              
            </View>
          
          </View>
        </View>

      ); //End of return
    } //End of render

    _onPress =_.throttle(() =>{
      var eventId

      if(this.state.e1 === true){
        eventId = 1
      } else if(this.state.e2 === true) {
        eventId = 2
      } else if(this.state.e3 === true) {
        eventId = 3
      } else if(this.state.e4 === true) {
        eventId = 4
      } else if(this.state.e5 === true) {
        eventId = 5
      } else {
        eventId = 6
      }

    },1000,{leading:true, trailing:false}); //End of button function

    _goBack =_.throttle(() =>{ 

    },1000,{leading:true, trailing:false}); //End of goBack button function

  } //End of class

  //Component css
  const styles = StyleSheet.create({

    container: {
      alignItems: "center",
      backgroundColor: '#FFFFFF',
      flex: 1
    },

    bcontainer: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
      paddingTop: 20
    },

    bcontainer2: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 2,
      flexDirection: 'row',
      paddingBottom: 30
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      width: 100,
      height: 100,
      borderColor: '#D8D8D8',
      borderWidth: 1,
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

    button2: {
        alignItems: 'center',
        backgroundColor: '#1294EF',
        justifyContent: 'center',
        borderRadius: 4,
        borderColor: '#1653bc',
        borderWidth: 1,
        width: 340,
        height: 60,
    },
    
    button2container: {
      alignItems: 'flex-end',
      paddingBottom: 10
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
      paddingBottom: 10,
      paddingTop: 10
    },

    navCircles: {
      paddingHorizontal: 4
    }

});

export default Events;