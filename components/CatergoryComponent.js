import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import colors from '../assets/colors';

const CatergoryComponent = props => {
  const {image, text} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={image} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CatergoryComponent;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 224,
  },
  textWrapper: {
    position: 'absolute',
    backgroundColor: colors.black,
    height: 37,
    justifyContent: 'center',
    marginTop: 187,
    marginLeft: 60,
  },
  text: {
    color: colors.white,
    fontWeight: '700',
    lineHeight: 21.33,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
