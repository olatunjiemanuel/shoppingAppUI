import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//SVG imports
import HomeTabSvg from './assets/SVGs/homeTabSvg';
import SearchSVG from './assets/SVGs/searchSVGs';
import LikesSVG from './assets/SVGs/likesSVG';
import CartSVG from './assets/SVGs/CartSVG';

//screen imports
import homeScreen from './screens/homeScreen';
import searchScreen from './screens/searchScreen';
import likesScreen from './screens/likesScreen';
import cartScreen from './screens/cartScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: 'flex',
              backgroundColor: '#fff',
              position: 'absolute',
              bottom: 20,
              height: 65,
              width: 352,
              marginHorizontal: 12,
              borderRadius: 69,
            },
            null,
          ],
          tabBarActiveTintColor: 'red',
          tabBarInActiveTintColor: 'gray',
          header: () => null,
        }}>
        <Tab.Screen
          name="homeScreen"
          component={homeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.TabIcons}>
                <HomeTabSvg color={focused ? 'red' : 'black'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="searchScreen"
          component={searchScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.TabIcons}>
                <SearchSVG color={focused ? 'red' : 'black'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="likesScreen"
          component={likesScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.TabIcons}>
                <LikesSVG color={focused ? 'red' : 'black'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="cartScreen"
          component={cartScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.TabIcons}>
                <CartSVG color={focused ? 'red' : 'black'} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  TabIcons: {
    position: 'absolute',
    top: 20,
  },
});
