import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButtom = props => {
  const {buttonText} = props;
  return (
    <TouchableOpacity style={Styles.buttonContainer}>
      <Text style={Styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue',
    width: 200,
    padding: 15,
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CustomButtom;
