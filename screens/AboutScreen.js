import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar
} from 'react-native';
import * as Expo from 'expo';
// Config

import colours from '../config/colours';

// GA tracking


export default class AboutScreen extends React.Component {


  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={styles.headingText}>SEARCH LyRIC MUSIC</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

//  Styles
const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colours.primaryBlack
  },
  container: {
    flex: 1,
    backgroundColor: colours.primaryBlacks,
    flexDirection: 'column',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40
  },

  headingText: {
    color: colours.primaryTeal,
    fontSize: 20,
    marginBottom: 20,
    marginTop: 30,
    fontWeight: '300'
  },
  detailsContainer: {
    paddingBottom: 20
  },
  detailsContainerText: {
    color: colours.primaryGrey,
    fontSize: 12,
    paddingBottom: 6
  },
  heading: {
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: colours.primaryBlack
  },
  logo: {
    width: 76,
    height: 76,
    marginBottom: 20
  }
});
