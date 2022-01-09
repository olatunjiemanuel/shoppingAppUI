import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import colors from '../assets/colors';

//sVG imports
import OptionsSVG from '../assets/SVGs/OptionsSVG';

const HeaderComponent = props => {
  const {text, image} = props;
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.options}>
        <OptionsSVG />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={[styles.text, {color: colors.black}]}>{text}</Text>
      </View>
      <TouchableOpacity
        style={[styles.imageContainer, {backgroundColor: colors.black}]}>
        <Image source={image} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  textContainer: {
    marginLeft: 18,
  },
  text: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 29.33,
    height: 29,
  },
  imageContainer: {
    marginLeft: 219,
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
