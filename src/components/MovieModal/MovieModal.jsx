import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';

import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieDescription from '../MovieDescription/MovieDescription';


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