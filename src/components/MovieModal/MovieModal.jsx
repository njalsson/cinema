import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieDescription from '../MovieDescription/MovieDescription';
import Ticket from '../Ticket/Ticket';

import styles from './styles';

export default function MovieModal({children, realeaseLabel, movie}) {
    
    return (
        <ScrollView >
            <View style={styles.container}>

                <MoviePoster uri={movie.poster} size="large"/>
                <MovieDescription
                    movie={movie}
                    realeaseLabel={realeaseLabel}>

                </MovieDescription>
                {children}
            </View>
        </ScrollView>
    );
}