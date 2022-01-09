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
    <ScrollView style={styles.homeContainer}>
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
      <View style={{marginHorizontal: 12, marginTop: 30}}>
        <View style={styles.itemWrapper}>
          <View>
            <BagItemComponent
              image={require('../assets/Images/redBag.png')}
              mainText="Artsy"
            />
          </View>
          <View>
            <BagItemComponent
              image={require('../assets/Images/greyBag.png')}
              mainText="Berkely"
            />
          </View>
        </View>
        <View style={[styles.itemWrapper, {marginTop: 24}]}>
          <View>
            <BagItemComponent
              image={require('../assets/Images/blackBag.png')}
              mainText="Capucinus"
            />
          </View>
          <View>
            <BagItemComponent
              image={require('../assets/Images/greenBag.png')}
              mainText="Monogram"
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text}>CHECK ALL LATEST</Text>
      </TouchableOpacity>
      <View style={{marginTop: 48, marginHorizontal: 20}}>
        <Text style={{fontWeight: '700', fontSize: 24, lineHeight: 30.19}}>
          Shop by categories
        </Text>
      </View>
      <View style={{marginTop: 24, marginHorizontal: 12}}>
        <View style={styles.itemWrapper}>
          <View>
            <CategoryComponent
              text="Handle bags"
              image={require('../assets/Images/handleBags.png')}
            />
          </View>
          <View>
            <CategoryComponent
              text="Crossbody bags"
              image={require('../assets/Images/crossBodyBags.png')}
            />
          </View>
        </View>
        <View style={[styles.itemWrapper, {marginTop: 24}]}>
          <View>
            <CategoryComponent
              text="Shoulder bags"
              image={require('../assets/Images/shoulderBags.png')}
            />
          </View>
          <View>
            <CategoryComponent
              text="Tote bag"
              image={require('../assets/Images/toteBag.png')}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={[styles.textContainer, {width: 240}]}>
        <Text style={styles.text}>BROWSE ALL CATERGORIES</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default homeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: 40,
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
