import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';

// color imports
import colors from '../assets/colors';

//component imports
import Header from '../components/HeaderComponent';
import BagItem from '../components/BagItemComponent';
import Category from '../components/CatergoryComponent';
import SeasonsLatest from '../components/SeasonsLatestComponent';

const homeScreen = () => {
  const [openModal, setmodalOpen] = useState(true);
  return (
    <ScrollView style={styles.homeContainer}>
      <Modal transparent={true} visible={openModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => {
              setmodalOpen(false);
            }}
            style={styles.modalLine}></TouchableOpacity>
        </View>
      </Modal>
      <View>
        <Header
          text="bagzz"
          image={require('../assets/Images/userprofilepic.png')}
        />
      </View>
      <View style={{marginTop: 28}}>
        <SeasonsLatest
          image1={require('../assets/Images/SeasonsLatest1.png')}
          image2={require('../assets/Images/SeasonsLatest2.png')}
        />
      </View>
      <View style={{marginHorizontal: 12, marginTop: 30}}>
        <View style={styles.itemWrapper}>
          <View>
            <BagItem
              image={require('../assets/Images/redBag.png')}
              mainText="Artsy"
            />
          </View>
          <View>
            <BagItem
              image={require('../assets/Images/greyBag.png')}
              mainText="Berkely"
            />
          </View>
        </View>
        <View style={[styles.itemWrapper, {marginTop: 24}]}>
          <View>
            <BagItem
              image={require('../assets/Images/blackBag.png')}
              mainText="Capucinus"
            />
          </View>
          <View>
            <BagItem
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
            <Category
              text="Handle bags"
              image={require('../assets/Images/handleBags.png')}
            />
          </View>
          <View>
            <Category
              text="Crossbody bags"
              image={require('../assets/Images/crossBodyBags.png')}
            />
          </View>
        </View>
        <View style={[styles.itemWrapper, {marginTop: 24}]}>
          <View>
            <Category
              text="Shoulder bags"
              image={require('../assets/Images/shoulderBags.png')}
            />
          </View>
          <View>
            <Category
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
  modalContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginTop: 250,
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  modalLine: {
    marginTop: 10,
    marginHorizontal: 145,
    width: 125,
    height: 2,
    backgroundColor: colors.black,
  },
});
