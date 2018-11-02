import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
  } from 'react-native';
import _ from 'lodash';
import { Link } from 'react-router-dom';

// Screen for people who do not know what car they want
class Events extends React.Component {

    state = {
      e1: false,
      e2: false,
      e3: false,
      e4: false,
      e5: false,
      e6: false,
      eventId: 6,
    };

    render() {

      return (
        
        <View style={{flex:1}}>

          <View style={styles.container}>
          
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ paddingTop: 60, paddingHorizontal: 40, fontWeight: '300', fontSize: 24, textAlign: 'center', lineHeight: 28, fontFamily: 'Roboto'}}>
                Reason for buying a new car
              </Text>
              <Text style={{ paddingVertical: 20, paddingHorizontal: 20, textAlign: "center", lineHeight: 30, fontSize: 14, fontFamily: 'Roboto'}}>
                Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle. Maurizzle pellentesque get down get down et turpizzle.
              </Text>
            </View>
            <View style={styles.bcontainer}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({e1: true, e2: false, e3: false, e4: false, e5: false, e6: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.e1 && styles.btext2]}> Event1 </Text>
              </TouchableHighlight>
              <View style={{paddingHorizontal: 5}}>
                <TouchableHighlight
                  underlayColor={'#FFFFFF'}
                  style={styles.button}
                  onPress={() => {this.setState({e1: false, e2: true, e3: false, e4: false, e5: false, e6: false},this._onPress(),500)}}
                >
                  <Text style={[styles.btext, this.state.e2 && styles.btext2]}> Event2 </Text>
                </TouchableHighlight>
              </View>
              
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({e1: false, e2: false, e3: true, e4: false, e5: false, e6: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.e3 && styles.btext2]}> Event3 </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.bcontainer2}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({e1: false, e2: false, e3: false, e4: true, e5: false, e6: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.e4 && styles.btext2]}> Event4 </Text>
              </TouchableHighlight>
              <View style={{paddingHorizontal: 5}}>
                <TouchableHighlight
                  underlayColor={'#FFFFFF'}
                  style={styles.button}
                  onPress={() => {this.setState({e1: false, e2: false, e3: false, e4: false, e5: true, e6: false},this._onPress(),500)}}
                >
                  <Text style={[styles.btext, this.state.e5 && styles.btext2]}> Event5 </Text>
                </TouchableHighlight>
              </View>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({e1: false, e2: false, e3: false, e4: false, e5: false, e6: true},this._onPress(),500)}}
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
              <Link to={`/Budget/${this.state.eventId}`}style={{ textDecoration: 'none' }}>
                <TouchableHighlight
                  underlayColor={'#0018A8'}
                  style={styles.button2}
                  onPress={_.debounce(() => {})}
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

      if(this.state.e1 === true){
        this.setState({eventId:1})

        
      } else if(this.state.e2 === true) {
        this.setState({eventId:2})

      } else if(this.state.e3 === true) {
        this.setState({eventId:3})

      } else if(this.state.e4 === true) {
        this.setState({eventId:4})

      } else if(this.state.e5 === true) {
        this.setState({eventId:5})

      } else {
        this.setState({eventId:6})

      }

    },0,{leading:false, trailing:true}); //End of button function

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
      paddingHorizontal: 5,
      paddingVertical: 5,
      flexDirection: 'row',
      paddingTop: 20
    },
    bcontainer2: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      flexDirection: 'row'
    },
    btext: {
      color: '#989898',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto'
    },
    btext2: {
      color: '#1294EF',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto'
    },
    btext3: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 19,
      fontFamily: 'Roboto'
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
    
    button2: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1294EF',
      borderRadius: 4,
      width: 94,
      height: 43,
      position: "absolute",
      left: 70,
      bottom: 280
    },
    
    button2container: {
      alignItems: 'flex-end',
      paddingBottom: 0,
      paddingRight: 10,
      paddingTop: 318,
    },
    navBar: {
      flexDirection: 'row',
      height: 80
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
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 40,
      paddingBottom: 35
    },
    navCircles: {
      paddingHorizontal: 4
    }
});

export default Events;