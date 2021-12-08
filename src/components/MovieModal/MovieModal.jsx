import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieDescription from '../MovieDescription/MovieDescription';
import Ticket from '../Ticket/Ticket';

import styles from './styles';

export default function MovieModal({children, realeaseLabel}) {

    return (
        <ScrollView >
            <View style={styles.container}>

                <MoviePoster uri="https://m.media-amazon.com/images/I/A1T+lZ6iUZL._SL1500_.jpg" size="large"/>
                <MovieDescription realeaseLabel={realeaseLabel}> </MovieDescription>
                {children}
            </View>
        </ScrollView>
    );
}