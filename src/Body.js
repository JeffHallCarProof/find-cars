import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
  } from 'react-native';
import _ from 'lodash';
import { Link} from 'react-router-dom';

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
      c10: false,
      c11: false,
      c12: false,
      eventId: this.props.match.params.eventId,
      lowerBound: this.props.match.params.lowerBound,
      upperBound: this.props.match.params.upperBound,
      classId: ' ',
    };

    render() {
      return (

        <View style={styles.container}>

          <View style={{alignItems: 'center', justifyContent: 'center', paddingBottom: 20}}>
            <Text style={{ paddingTop: 30, paddingHorizontal: 50, fontWeight: '300', fontSize: 24, lineHeight: 28, textAlign: "center"}}>
              Preferred body type
            </Text>
            
          </View>

          <View style={styles.bcontainer}>
            <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({c1: true, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false, c10: false, c11: false, c12: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.c1 && styles.btext2]}> Sedan </Text>
              </TouchableHighlight>

              <View style={{paddingHorizontal: 4}}>
                <TouchableHighlight
                  underlayColor={'#FFFFFF'}
                  style={styles.button}
                  onPress={() => {this.setState({c1: false, c2: true, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false, c10: false, c11: false, c12: false},this._onPress(),500)}}
                  >
                  <Text style={[styles.btext, this.state.c2 && styles.btext2]}> SUV </Text>
                </TouchableHighlight>
              </View>
              
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({c1: false, c2: false, c3: true, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false, c10: false, c11: false, c12: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.c3 && styles.btext2]}> Cab </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.bcontainer2}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: true, c5: false, c6: false,c7: false, c8: false, c9: false, c10: false, c11: false, c12: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.c4 && styles.btext2]}> Hatchback </Text>
              </TouchableHighlight>

              <View style={{paddingHorizontal: 4}}>
                <TouchableHighlight
                  underlayColor={'#FFFFFF'}
                  style={styles.button}
                  onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: true, c6: false,c7: false, c8: false, c9: false, c10: false, c11: false, c12: false},this._onPress(),500)}}
                  >
                  <Text style={[styles.btext, this.state.c5 && styles.btext2]}> Coupe</Text>
                </TouchableHighlight>
              </View>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: true,c7: false, c8: false, c9: false, c10: false, c11: false, c12: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.c6 && styles.btext2]}> Convertible </Text>
              </TouchableHighlight>
          </View>
          <View style={styles.bcontainer3}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() =>{ this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: true, c8: false, c9: false, c10: false, c11: false, c12: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.c7 && styles.btext2]}> Wagon </Text>
              </TouchableHighlight>

              <View style={{paddingHorizontal: 4}}>
                <TouchableHighlight
                  underlayColor={'#FFFFFF'}
                  style={styles.button}
                  onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: true, c9: false, c10: false, c11: false, c12: false},this._onPress(),500)}}
                  >
                  <Text style={[styles.btext, this.state.c8 && styles.btext2]}> Minivan </Text>
                </TouchableHighlight>
              </View>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: true, c10: false, c11: false, c12: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.c9 && styles.btext2]}> Diesel </Text>
              </TouchableHighlight>
          </View>
          <View style={styles.bcontainer4}>
              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false, c10: true, c11: false, c12: false},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.c10 && styles.btext2]}> Van </Text>
              </TouchableHighlight>
              <View style={{paddingHorizontal: 4}}>
                <TouchableHighlight
                  underlayColor={'#FFFFFF'}
                  style={styles.button}
                  onPress={() => {this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false, c10: false, c11: true, c12: false},this._onPress(),500)}}
                  >
                  <Text style={[styles.btext, this.state.c11 && styles.btext2]}> 11th class needed </Text>
                </TouchableHighlight>
              </View>

              <TouchableHighlight
                underlayColor={'#FFFFFF'}
                style={styles.button}
                onPress={() =>{this.setState({c1: false, c2: false, c3: false, c4: false, c5: false, c6: false,c7: false, c8: false, c9: false, c10: false, c11: false, c12: true},this._onPress(),500)}}
              >
                <Text style={[styles.btext, this.state.c12 && styles.btext2]}> Other </Text>
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
      }else if(this.state.c10 === true) {
        this.setState({classId: 'Van'})
      } else if(this.state.c11 === true) {
        this.setState({classId: 'NEED A CLASS'})
      } else {
        this.setState({classId: 'Other'})
      }

      console.log(this.state.classId)


    },0,{leading:false, trailing:true});

    _goBack =_.throttle(() =>{ 

    },1000,{leading:true, trailing:false});

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
      paddingHorizontal: 2,
      paddingVertical: 2,
      flexDirection: 'row',
    },

    bcontainer2: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 2,
      paddingVertical: 2,
      flexDirection: 'row',
    },
    bcontainer3: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 2,
      paddingVertical: 2,
      flexDirection: 'row',
    },
    bcontainer4: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 2,
      paddingVertical: 2,
      flexDirection: 'row',
      paddingBottom: 10
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
        backgroundColor: '#1294EF',
        justifyContent: 'center',
        borderRadius: 4,
        width: 318,
        height: 60,
    },
    
    button2container: {
      alignItems: 'flex-end',
      paddingBottom: 10,
      paddingTop: 22,
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
      paddingTop: 10
    },

    navCircles: {
      paddingHorizontal: 4
    }

});

export default Body;