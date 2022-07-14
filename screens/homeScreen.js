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
    <View style={{paddingTop: 40, backgroundColor: 'red', flex: 1}}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default homeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textContainer: {
    marginTop: 36,
    alignSelf: 'center',
    borderWidth: 1,
    width: 184,
    height: 35,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 18.77,
    fontSize: 16,
  },
});
