import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { green } from '../../styles/colors';
import styles from './styles';

import MoviePoster from '../MoviePoster/MoviePoster';
import Genre from '../Genre/Genre';
export default function MovieItem({onPress}) {
    return (

        <TouchableOpacity
            onPress={onPress}
        >
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
                <AntDesign name="right" size={36} color={green} style={{position: 'absolute', top: 20, right: 20,}}/>
            </View>

        </TouchableOpacity>
    );
}

