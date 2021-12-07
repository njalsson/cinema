import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Cinemas from '../views/Cinemas/Cinemas';
import Upcoming from '../views/Upcoming/Upcoming';

import { navigationBackground, background, gray, green } from '../styles/colors';
const DarkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: background,
        text: 'white',
        border: 'black',
        card: navigationBackground,
        primary: gray,
    }
    
};

export default function AppContainer() {

    return (
        <NavigationContainer theme={DarkTheme}>
            <Tab.Navigator
                initialRouteName="Cinemas"
                screenOptions={({ route }) => ({
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 24,
                    },
                    tabBarIcon: ({ focused, size }) => {
                        let iconName;
                        const color = focused ? green : gray;
                        
                        if (route.name === 'Cinemas') {
                            iconName = 'theaters';
                            
                        } else if (route.name === 'Upcoming'){
                            iconName = 'movie-filter';
                        }
                        return <MaterialIcons name={iconName} size={34} color={color}/>
                    },
                    tabBarActiveTintColor: green,
                    tabBarInactiveTintColor: gray,
                    tabBarStyle: {
                        height: 100,
                        padding: 20,
                    },
                    tabBarLabelStyle: {
                        fontSize: 14,
                    },

                })}
            >
                <Tab.Screen name="Cinemas" component={Cinemas}/>
                <Tab.Screen name="Upcoming" component={Upcoming} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

