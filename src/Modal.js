import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: "0%",
      bottom: "0%",
      left: "0%",
      right: "0%",
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 10
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      minWidth: '100%',
      minHeight: '100%',
      padding: 0,
      alignSelf: 'center',
      

    };



    return (
      <div className="backdrop" style={{backdropStyle}}>
        <div className="modal" style={{modalStyle}}>
          {this.props.children}
          <View style={{position: 'absolute', top: 15, right: 15}}>
          <TouchableHighlight
              underlayColor={'#FFFFFF'}
              onPress={this.props.onExit}
              >
                <Image source={require('./assets/X-Close.png')} style={{width: 12, height: 12}}></Image>
              </TouchableHighlight>
          </View>
            

          <View style={{alignItems:'center', position: "absolute", bottom: 20,left: '2.5%', right: '2.5%', width: '95%'}}>
            <TouchableHighlight
                    underlayColor={'#0018A8'}
                    style={{alignItems: 'center',justifyContent: 'center',backgroundColor: '#1294EF',borderRadius: 4,width: 300,height: 43,}}
                    onPress={this.props.onClose}
                    
                >
                    <Text style={{color:'#FFFFFF', fontSize:16,fontWeight:'bold',lineHeight: 19}}> DONE </Text>
                </TouchableHighlight>
          </View>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  
};

export default Modal;