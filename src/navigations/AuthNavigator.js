import React, { useState, useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import { useNavigation } from '@react-navigation/native';
import routes from '../constants/routes';
const Stack = createStackNavigator();

function AuthNavigator(props) {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
          <Stack.Screen
            name={routes.LOGIN}
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={routes.REGISTER} component={Signup} />

    </Stack.Navigator>
  );
}

export default AuthNavigator;
