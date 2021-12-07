import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 

import { gray, green } from '../styles/colors';

import Cinemas from '../views/Cinemas/Cinemas';
import Upcoming from '../views/Upcoming/Upcoming';

const Tab = createBottomTabNavigator();

const TabContainer = () => {
    return (
        <Tab.Navigator
            initialRouteName="Cinemas"
            screenOptions={({ route }) => ({
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 24,
                },
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    const color = focused ? green : gray;
                        
                    if (route.name === 'Cinemas') {
                        iconName = 'theaters';
                            
                    } else if (route.name === 'Upcoming'){
                        iconName = 'movie-filter';
                    }
                    return <MaterialIcons name={iconName} size={34} color={color}/>;
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

    );
};

export default TabContainer;
