import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
  } from 'react-native';
import _, {debounce} from 'lodash';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

  class Budget extends React.Component {

    state = {
      values: [0, 50000],
    };

    //This function allows the lower and upper bounds of the budget slider to be read and stored in variables
    multiSliderValueChange = (values) => {
      this.setState({values});
    }

    render() { 
      
      var min = this.state.values[0];
      var max = this.state.values[1];
      console.log(this.props.match.params)
      return ( 

        <View style={styles.container}>

          <View style={styles.bcontainer}>
          
            <View style={styles.sliderLabelView2}>
              <Text style={styles.infoText}>What's your budget?</Text>
            </View>

            <View style={styles.sliderLabelView}>
              <Text style={styles.sliderLabel1}>Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle. Maurizzle pellentesque get down get down et turpizzle.</Text>
            </View>

            <View style={{height: 43, width: 161, borderColor: '#C7C7C7', borderWidth: 1, borderRadius: 4, justifyContent: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: '300', lineHeight: 21, textAlign: 'center'}}>${min} - ${max}</Text>
            </View>

            <View style={{flexDirection: "row", width: 265, justifyContent: "space-between"}}>
              <Text style={styles.sliderLabels}>$0</Text>
              <Text style={styles.sliderLabels}>ANY</Text>
            </View>

          </View>
          
          <View style={styles.navContainer}>
            <View style={styles.navCircles}><View style={styles.circle}/></View>
            <View style={styles.navCircles}><View style={styles.activeNav}/></View>
            <View style={styles.navCircles}><View style={styles.circle}/></View>
            <View style={styles.navCircles}><View style={styles.circle}/></View>
          </View>

          <View style={styles.buttonContainer}>
            <Link to="/Body" style={{ textDecoration: 'none' }}>
                <TouchableHighlight
                    underlayColor={'#0018A8'}
                    style={styles.button}
                    onPress={_.debounce(() => {this._onPress()},400)}
                >
                    <Text style={styles.btext}> NEXT </Text>
                </TouchableHighlight>
            </Link>
          </View>
        </View>
        
      ); //End of return
    } //End of render

    // set up functions as below but add debounce
    _onPress =_.throttle(() =>{ 

    },1000,{leading:true, trailing:false});

    _goBack =_.throttle(() =>{ 

    },1000,{leading:true, trailing:false});

  } //End of class

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: '#FFFFFF'
    },

    contentContainer: {
      paddingTop: 30
    },

    bcontainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingTop: 90
    },

    btext: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 19
    },

    buttonContainer: {
      paddingBottom: 10,
      paddingTop: 10,
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
        borderColor: '#1653bc',
        borderWidth: 1,
        width: 340,
        height: 60,
      
    },

    sliderView: {
      paddingTop: 50,
      justifyContent: "center"
    },

    sliderLabelView: {
      paddingTop: 10,
      paddingBottom: 65
    },

    sliderLabelView2: {
      alignItems: "center",
      paddingBottom: 20,
      paddingHorizontal: 20
    },

    sliderLabel1: {
      fontSize: 14,
      textAlign: "center",
      paddingHorizontal: 10,
      lineHeight: 30
    },

    infoText: {
      fontSize: 24,
      fontWeight: '300',
      lineHeight: 28,
      textAlign: 'center'
    },

    sliderLabels: {
      fontSize: 16,
      lineHeight: 19
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

  export default Budget;