import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import MoviePoster from '../MoviePoster/MoviePoster';
import Genre from '../Genre/Genre';
export default function MovieItem() {
    return (
        <View style={styles.container}>
            <MoviePoster uri="https://m.media-amazon.com/images/I/A1T+lZ6iUZL._SL1500_.jpg" />
            <View style={styles.subcontainer}>
                <Text style={styles.text}>Home Alone</Text>
                <Text style={[styles.text, {fontSize: 16}]}>1990</Text>
                <View style={styles.genreContainer}>
                    <Genre genre="Family-friendly" />
                    <Genre genre="Comedy" />
                    <Genre genre="Action" />
                </View>
            </View>
        </View>
    );
}

