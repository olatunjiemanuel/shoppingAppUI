import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import SeasonsLatestComponent from '../components/SeasonsLatestComponent';

//component imports
import HeaderComponent from '../components/HeaderComponent';
import BagItemComponent from '../components/BagItemComponent';
import CategoryComponent from '../components/CatergoryComponent';

const homeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default homeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: 40,
    backgroundColor: 'red',
    flex: 1,
  },
});
