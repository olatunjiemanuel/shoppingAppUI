import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// component imports
import Header from '../components/HeaderComponent';

const searchScreen = () => {
  return (
    <View style={styles.searchPageContainer}>
      <View>
        <Header
          text="bagzz"
          image={require('../assets/Images/userprofilepic.png')}
        />
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.text}>X</Text>
        </TouchableOpacity>
        <TextInput placeholder="Type here to search" style={styles.textInput} />
      </View>
    </View>
  );
};

export default searchScreen;

const styles = StyleSheet.create({
  searchPageContainer: {
    marginTop: 40,
    marginHorizontal: 12,
  },
  text: {
    width: 15,
    height: 14.51,
    fontWeight: '700',
  },
  textInput: {
    borderBottomWidth: 1,
    marginHorizontal: 17,
    marginTop: 11.7,
    paddingBottom: 13.54,
    fontWeight: '400',
    fontSize: 21,
    lineHeight: 26.42,
  },
  closeButton: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 32,
  },
});
