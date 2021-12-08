import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieDescription from '../../components/MovieDescription/MovieDescription';
import Ticket from '../../components/Ticket/Ticket';

import styles from './styles';

export default function CinemaMovie({navigation}) {
    useEffect(() => {
        navigation.setOptions({title: 'Home alone'});
    }, []);

    return (
        <ScrollView >
            <View style={styles.container}>

                <MoviePoster uri="https://m.media-amazon.com/images/I/A1T+lZ6iUZL._SL1500_.jpg" size="large"/>
                <MovieDescription> </MovieDescription>
                <View style={{width: '100%', marginTop: 20,}}>
                    <Text style={styles.label}>Buy tickets:</Text>
                    <Ticket></Ticket>
                    <Ticket></Ticket>
                    <Ticket></Ticket>

                </View>
            </View>
        </ScrollView>
    );
}

