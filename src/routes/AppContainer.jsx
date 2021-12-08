import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
const Stack = createStackNavigator();

import { navigationBackground, background, gray } from '../styles/colors';

import TabContainer from './TabContainer';
import Cinema from '../views/Cinema/Cinema';
import CinemaMovie from '../views/CinemaMovie/CinemaMovie';
import UpcomingMovie from '../views/UpcomingMovie/UpcomingMovie';

const DarkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: background,
        text: 'white',
        border: navigationBackground,
        card: navigationBackground,
        primary: gray,
    }
    
};

export default function AppContainer() {

    return (
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="left" size={36} color={gray} />
                        </TouchableOpacity>
                    ),
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 24,
                    },
                })}
            >
                <Stack.Group>
                    <Stack.Screen
                        name="Tabs"
                        component={TabContainer}
                        options={{ headerShown: false}}
                    />
                </Stack.Group>
                <Stack.Group screenOptions={{presentation: 'modal'}}>
                    <Stack.Screen
                        name="CinemaMovie"
                        component={CinemaMovie}
                        options={{
                            headerStyle: {
                                backgroundColor: background,
                                shadowColor: 'transparent',
                            },
                           
                        }}
                    />
                    <Stack.Screen
                        name="UpcomingMovie"
                        component={UpcomingMovie}
                        options={{
                            headerStyle: {
                                backgroundColor: background,
                                shadowColor: 'transparent',
                            },
                           
                        }}
                    />
                    <Stack.Screen name="Cinema" component={Cinema}/>
                    
                </Stack.Group>
            </Stack.Navigator>
            
        </NavigationContainer>
    );
}

