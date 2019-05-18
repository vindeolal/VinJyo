import {createStackNavigator} from 'react-navigation';
import React from 'react';
import TitlesScreen from "./views/TitlesScreen";
import DataScreen from "./views/DataScreen";
import MainScreen from "./views/MainScreen";

const AppNavigator = createStackNavigator({
    MainScreen: {
        screen: MainScreen,
        navigationOptions: {
            header: null
        },
    },
    TitlesScreen: {
        screen: TitlesScreen,
        navigationOptions: {
            header: null
        },
    },
    DataScreen: {
        screen: DataScreen,
        navigationOptions: {
            header: null
        }
    }

});

export default AppNavigator;
