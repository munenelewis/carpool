import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component, useState} from 'react';
import {faBell, faSearchLocation} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Notification = () => {
  const [text, setText] = useState('');

  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 100,
        // alignItems: 'center',
        // alignContent: 'center',
        // backgroundColor: 'red'
      }}>
      <FontAwesomeIcon icon={faBell} color={'grey'} size={30} style={{  marginTop:5}} />
    </View>
  );
};
export default Notification;
