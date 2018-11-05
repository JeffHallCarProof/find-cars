import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
  } from 'react-native';
import _ from 'lodash';
import { Link} from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);

  class Budget extends React.Component {
    
    //This function allows the lower and upper bounds of the budget slider to be read and stored in variables
    onSliderChange = (value) => {
      this.setState({lowerBound: value[0], upperBound: value[1]})
    }

    state = {
      eventId: this.props.match.params.eventId,
      min: 0,
      max: 100000,
      lowerBound: 0,
      upperBound: 50000
    };

    render() { 

      var min = this.state.min
      var max = this.state.max

      console.log(this.state.eventId)

      return ( 

        <View style={styles.container}>

          <View style={{backgroundColor: '#FFFFFF', height: 60, alignItems: "center", justifyContent: "center", boxShadow: `0px 2px 4px 0px rgba(0,0,0,0.17)`}}>
            <Image source={require('./assets/CARFAX-Canada.png')} style={{width: 123, height: 31}}></Image>
          </View>

          <View style={styles.bcontainer}>
          
            <Text style={styles.infoText}>What's your budget?</Text>
            <Text style={styles.sliderLabel1}>Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle. Maurizzle pellentesque get down get down et turpizzle.</Text>
            
            <div>
              <View style={{height: 43, width: 161, borderColor: '#C7C7C7', borderWidth: 1, borderRadius: 4, justifyContent: 'center', backgroundColor: '#FFFFFF'}}>
                <Text style={{fontSize: 18, fontWeight: '300', lineHeight: 21, textAlign: 'center'}}>{"$" + this.state.lowerBound + " - $" + this.state.upperBound}</Text>
              </View>
              <br /><br /><br />
                <Range min={min} max={max} defaultValue={[this.state.lowerBound, this.state.upperBound]} allowCross={false} onChange={this.onSliderChange} />
            </div>

            <View style={{flexDirection: "row", width: 180, justifyContent: "space-between", paddingTop: 10}}>
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
            <Link to={`/Body/${this.state.eventId}/${this.state.lowerBound}/${this.state.upperBound}`} style={{ textDecoration: 'none' }}>
                <TouchableHighlight
                    underlayColor={'#0018A8'}
                    style={styles.button}
                    onPress={_.debounce(() => {})}
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
      height: '100%',
      alignContent: "center",
      backgroundColor: '#FAFAFA'
    },

    bcontainer: {
      alignItems: 'center',
    },

    btext: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 19
    },

    buttonContainer: {
      position: "absolute",
      bottom: 10,
      right: 10
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1294EF',
      borderRadius: 4,
      width: 94,
      height: 43,
    },

    sliderLabel1: {
      fontSize: 14,
      textAlign: "center",
      paddingHorizontal: 10,
      lineHeight: 30,
      paddingBottom: 15
    },

    infoText: {
      fontSize: 24,
      fontWeight: '300',
      lineHeight: 28,
      textAlign: 'center',
      paddingTop: 45,
      paddingBottom: 15
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
      position: 'relative',
      bottom: -15,
      paddingTop: 53
    },

    navCircles: {
      paddingHorizontal: 4
    }

  });

  export default Budget;