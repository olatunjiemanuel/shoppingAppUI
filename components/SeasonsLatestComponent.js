import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const SeasonsLatestComponent = props => {
  const {image1, image2} = props;
  return (
    <View style={styles.scrollViewContainer}>
      <ScrollView
        horizontal
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        <Image source={image1} />
        <Image source={image2} />
      </ScrollView>
      <View style={styles.textContainer}>
        <View style={[styles.text, {width: 50}]}>
          <Text style={styles.text}>This</Text>
        </View>
        <View style={[styles.text, {width: 92}]}>
          <Text style={styles.text}>season's</Text>
        </View>
        <View style={[styles.text, {width: 60}]}>
          <Text style={styles.text}>latest</Text>
        </View>
      </View>
    </View>
  );
};

export default SeasonsLatestComponent;

const styles = StyleSheet.create({
  scrollViewContainer: {
    width: 351,
    height: 205,
    marginHorizontal: 12,
    marginLeft: 20,
  },
  textContainer: {
    position: 'absolute',
    height: 84,
    marginLeft: 246,
    marginTop: 50,
  },
  text: {
    fontWeight: '700',
    fontSize: 22,
    backgroundColor: '#fff',
  },
});
