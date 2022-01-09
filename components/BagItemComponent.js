import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// SVG Imports
import HeartSvg from '../assets/SVGs/heartSvg';

//colors import
import colors from '../assets/colors';

const BagItemComponent = props => {
  const {image, mainText} = props;
  return (
    <TouchableOpacity style={styles.BagItemWrapper}>
      <View style={styles.heartContainer}>
        <HeartSvg />
      </View>
      <View style={styles.ImageContainer}>
        <Image source={image} />
      </View>
      <View style={{marginTop: 11}}>
        <Text style={styles.mainText}>{mainText}</Text>
      </View>
      <View style={{marginTop: 18}}>
        <Text style={styles.subText}>SHOP NOW</Text>
      </View>
      <View style={styles.underLine}></View>
    </TouchableOpacity>
  );
};

export default BagItemComponent;

const styles = StyleSheet.create({
  heartContainer: {
    position: 'absolute',
    marginLeft: 145,
    marginTop: 6,
  },
  BagItemWrapper: {
    backgroundColor: colors.backBackground,
    width: 170,
    height: 210,
  },
  ImageContainer: {
    marginLeft: 31,
    marginTop: 6,
  },
  mainText: {
    fontWeight: '700',
    lineHeight: 23.99,
    fontSize: 18,
    textAlign: 'center',
  },
  subText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16.42,
  },
  underLine: {
    alignSelf: 'center',
    width: 88,
    height: 2,
    backgroundColor: colors.black,
    marginTop: 4,
  },
});
