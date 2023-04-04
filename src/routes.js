import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}