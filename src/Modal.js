import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
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

          <View style={{position: 'absolute',bottom:'1%',left:'70%'}}>

            <TouchableHighlight
                    underlayColor={'#0018A8'}
                    style={{alignItems: 'center',justifyContent: 'center',backgroundColor: '#1294EF',borderRadius: 4,width: 94,height: 43,}}
                    onPress={this.props.onClose}
                >
                    <Text style={{color:'#FFFFFF', fontSize:16,fontWeight:'bold',lineHeight: 19}}> Close </Text>
                </TouchableHighlight>
          </View>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;