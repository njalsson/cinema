import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles';
import Genre from '../Genre/Genre';
export default function MovieDescription({realeaseLabel, movie}) {
    const {title, year, durationMinutes, plot, genres} = movie;
    const releaseDate = movie["release-dateIS"];

    return (
        <View style={styles.container}>
            <Text style={[styles.text, {marginBottom: 10}]}>{plot}</Text>
            <Text style={styles.text}>{realeaseLabel} {releaseDate ? releaseDate : year}</Text>
            {durationMinutes ? 
                <Text style={[styles.text,]}>Duration: {durationMinutes} minutes</Text>
                : <></>
            }
            <View style={styles.genreContainer}>
                {genres.map(genre => {
                    if (typeof genre === 'object') {

                        return <Genre genre={genre.Name} key={genre.ID}/>;
                    }
                })}
            </View>
        </View>
    );
}

