import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//SVG imports
import HomeTabSvg from './assets/SVGs/homeTabSvg';
import SearchSvg from './assets/SVGs/searchSVGs';
import LikesSvg from './assets/SVGs/likesSVG';
import CartSvg from './assets/SVGs/CartSVG';

//screen imports
import HomeScreen from './screens/homeScreen';
import SearchScreen from './screens/searchScreen';
import LikesScreen from './screens/likesScreen';
import CartScreen from './screens/cartScreen';

import colors from "./assets/colors"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              // display: 'flex',  this isn't neccessary. It's the default.
              backgroundColor: '#fff',
              position: 'absolute',
              bottom: 20,
              height: 65,
              width: 352,
              marginHorizontal: 18,
              borderRadius: 69,
              marginBottom: 40,
            },
            null,
          ],
          tabBarActiveTintColor: colors.red,
          tabBarInActiveTintColor: colors.gray,
          header: () => null,
        }}>
        <Tab.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.TabIcons}>
                <HomeTabSvg color={focused ? colors.red : colors.black} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="searchScreen"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.TabIcons}>
                <SearchSvg color={focused ? colors.red : colors.black} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="likesScreen"
          component={LikesScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.TabIcons}>
                <LikesSvg color={focused ? colors.red : colors.black} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="cartScreen"
          component={CartScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabIcons}>
                <CartSvg color={focused ? colors.red : colors.black} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabIcons: {
    position: 'absolute',
    top: 20,
  },
});


