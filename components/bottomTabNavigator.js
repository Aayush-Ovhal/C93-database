import * as React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

export const BottomTabNavigator = createBottomTabNavigator({
    SignUp: {
        screen: Signup,
        navigationOptions: {
            tabBarLabel: "Sign up"
        }
    },
    LogIn: {
        screen: Login,
        navigationOptions: {
            tabBarLabel: "Log in"
        }
    }

})