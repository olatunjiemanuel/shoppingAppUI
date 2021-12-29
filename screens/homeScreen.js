import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SeasonsLatestComponent from '../components/SeasonsLatestComponent';

//component imports
import HeaderComponent from '../components/HeaderComponent';

const homeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <View>
        <HeaderComponent
          text="bagzz"
          image={require('../assets/Images/userprofilepic.png')}
        />
      </View>
      <View style={{marginTop: 28}}>
        <SeasonsLatestComponent
          image1={require('../assets/Images/SeasonsLatest1.png')}
          image2={require('../assets/Images/SeasonsLatest2.png')}
        />
      </View>
    </View>
  );
};

export default homeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: 40,
  },
});
