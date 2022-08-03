import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component, useState} from 'react';
import {
  faBell,
  faLocationPin,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const CardHolder = () => {
  const [text, setText] = useState('');

  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 10,
        // height:'20%'
      }}>
      <View style={{flex: 1, padding: 10, marginTop: 30}}>
        <FontAwesomeIcon icon={faBell} color={'grey'} size={30} />
      </View>
      <View style={{flex: 8, paddingTop: 15}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.6}}>
            <Text style={{fontSize: 20, fontFamily: 'sans-serif'}}>
              Trip to City ZOO
            </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              backgroundColor: '#5D61EE',
              borderRadius: 50,
              alignItems: 'center',
              marginTop: 4,
            }}>
            <Text style={{fontSize: 12, color: 'white'}}>3/4 Seats</Text>
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <View>
            <Text style={{fontSize: 15, fontFamily: 'sans-serif'}}>
              {' '}
              <FontAwesomeIcon
                icon={faLocationPin}
                color={'grey'}
                size={10}
              />{' '}
              Nairobi Kenya
              <Text style={{fontSize: 15, fontFamily: 'sans-serif'}}>
                {' '}
                <FontAwesomeIcon
                  icon={faMapMarker}
                  color={'grey'}
                  size={10}
                />{' '}
                Nairobi Kenya
              </Text>
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{flex: 0.9}}>
            <Text style={{fontSize: 15, fontFamily: 'sans-serif'}}>
              Meet at home - 10:00 am
            </Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{fontSize: 15, fontFamily: 'sans-serif'}}>
              Nairobi Kenya
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CardHolder;
