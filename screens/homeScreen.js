import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    </View>
  );
};

export default homeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: 40,
    marginHorizontal: 12,
  },
});
