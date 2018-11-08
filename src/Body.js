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

          <View style={{backgroundColor: '#FFFFFF', height: 60, boxShadow: `0px 2px 4px 0px rgba(0,0,0,0.17)`}}>
            <View style={{position: 'absolute', left: 15, top: 17}}>
              <Link to={`/Budget/${this.state.eventId}`} style={{ textDecoration: 'none' }}>
                <TouchableHighlight underlayColor={'#FFFFFF'}>
                  <Image source={require('./assets/Path.png')} style={{width: 12, height: 21}}></Image>
                </TouchableHighlight>
              </Link>
            </View>
            <View style={{position: 'absolute', left: 125, top: 17}}><Image source={require('./assets/CARFAX-Canada.png')} style={{width: 123, height: 31}}></Image></View>
          </View>

          <View style={{paddingTop: 10}}>
            <Text style={{fontSize: 24, fontWeight: '300', lineHeight: 28, textAlign: 'center'}}>Preferred body type</Text>
          </View>
          <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
            <Text style={{fontSize: 14, lineHeight: 30, textAlign: 'center'}}>Fo shizzle at fo shizzle mah nizzle fo rizzle, mah home g-dizzle dapibizzle turpis tempus i'm in the shizzle.</Text>
          </View>

          <View style={styles.bcontainer}>
            <TouchableHighlight
              underlayColor={'#FFFFFF'}
              style={styles.button}
              onPress={() => {this.setState({c1: true, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}
            >
              <Text style={[styles.btext, this.state.c1 && styles.btext2]}> Sedan </Text>
            </TouchableHighlight>

            <View style={{paddingHorizontal: 6}}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({c1: false, c2: true, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.c2 && styles.btext2]}> SUV </Text>
              </TouchableHighlight>
            </View>
              
            <TouchableHighlight
              underlayColor={'#FFFFFF'}
              style={styles.button}
              onPress={() => {this.setState({c1: false, c2: false, c3: true, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}
            >
              <Text style={[styles.btext, this.state.c3 && styles.btext2]}> Cab </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.bcontainer2}>
            <TouchableHighlight
              underlayColor={'#FFFFFF'}
              style={styles.button}
              onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: true, c5: false, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}
            >
              <Text style={[styles.btext, this.state.c4 && styles.btext2]}> Hatchback </Text>
            </TouchableHighlight>

            <View style={{paddingHorizontal: 6}}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: true, c6: false,c7: false, c8: false, c9: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.c5 && styles.btext2]}> Coupe</Text>
              </TouchableHighlight>
            </View>

            <TouchableHighlight
              underlayColor={'#FFFFFF'}
              style={styles.button}
              onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: true,c7: false, c8: false, c9: false},this._onPress(),500)}}
            >
              <Text style={[styles.btext, this.state.c6 && styles.btext2]}> Convertible </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.bcontainer3}>
            <TouchableHighlight
              underlayColor={'#FFFFFF'}
              style={styles.button}
              onPress={() =>{ this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: true, c8: false, c9: false},this._onPress(),500)}}
            >
              <Text style={[styles.btext, this.state.c7 && styles.btext2]}> Wagon </Text>
            </TouchableHighlight>

            <View style={{paddingHorizontal: 6}}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: true, c9: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.c8 && styles.btext2]}> Minivan </Text>
              </TouchableHighlight>
            </View>

            <TouchableHighlight
              underlayColor={'#FFFFFF'}
              style={styles.button}
              onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: true},this._onPress(),500)}}
            >
              <Text style={[styles.btext, this.state.c9 && styles.btext2]}> Diesel </Text>
            </TouchableHighlight>
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
                onPress={_.debounce(() => {})}
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
      paddingVertical: 3,
      flexDirection: 'row',
    },

    bcontainer2: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 3,
      flexDirection: 'row',
    },

    bcontainer3: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 3,
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
      bottom: 10,
      right: 10
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
      position: "relative",
      bottom: -10
    },

    navCircles: {
      paddingHorizontal: 4
    }

});

export default Body;