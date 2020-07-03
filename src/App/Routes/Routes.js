import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from 'screens/FeedScreen/FeedScreen';
import PostScreen from 'screens/PostScreen/PostScreen';
import {navigationRef} from './rootNavigation';
import {options} from './screen-options';

export const ROUTE_NAMES = {
  FEED: 'FEED',
  POST: 'POST',
};

export const ROUTE_TITLES = {
  [ROUTE_NAMES.FEED]: 'Future of feeds',
  [ROUTE_NAMES.POST]: 'Post',
};

const Stack = createStackNavigator();

export default function NavContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          options={options}
          name={ROUTE_NAMES.FEED}
          title={ROUTE_TITLES[ROUTE_NAMES.FEED]}
          component={FeedScreen}
        />
        <Stack.Screen
          options={options}
          name={ROUTE_NAMES.POST}
          title={ROUTE_TITLES[ROUTE_NAMES.POST]}
          component={PostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
