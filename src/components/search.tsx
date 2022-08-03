import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component, useState} from 'react';
import {faSearch, faSearchLocation} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Search = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Image
          source={{
            uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
          }} //Change your icon image here
          style={styles.ImageStyle}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          underlineColorAndroid="transparent"
        />
        <FontAwesomeIcon
          style={styles.searchIcon}
          icon={faSearch}
          color={'grey'}
          size={30}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 50,
    // width:70
    paddingLeft: 0.5,
    paddingRight: 20,
  },
  textInput: {
    height: 10,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff',
  },
  searchIcon: {
    // padding: 10,
    margin: 10,
    fontSize:1
    // width:20
  },
  input: {
    flex: 1,
    // paddingTop: 10,
    // paddingRight: 10,
    // paddingBottom: 10,
    // paddingLeft: 0,
    // backgroundColor: '#fff',
    // color: '#424242',
  },
  ImageStyle: {
    // paddingLeft: 40,
    // margin: 5,
    height: '100%',
    width: 50,
    borderRadius: 50,
    // resizeMode: 'stretch',
    // alignItems: 'center',
  },
});
