/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { green } from '../../styles/colors';
import styles from './styles';

import MoviePoster from '../MoviePoster/MoviePoster';
import Genre from '../Genre/Genre';
import ImdbRating from '../ImdbRating/ImdbRating';

export default function MovieItem({onPress, movie}) {
    const {poster, title, year, genres, } = movie;
    const releaseDate = movie['release-dateIS'];
    // check if the movie has a imdb rating
    const rating = movie.hasOwnProperty('ratings');

    return (

        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>

                    <MoviePoster uri={poster} />
                    <View style={styles.subcontainer}>
                        <Text style={styles.text}>{title}</Text>
                        <Text style={[styles.text, {fontSize: 16}]}>{releaseDate ? releaseDate : year}</Text>
                        {/* if a movie is in the upcoming tab and has no rating on imdb, don't return the imdb score */}
                        {rating ?   
                            <ImdbRating rating={movie.ratings.imdb} />: <></>
                        }
                    </View>

                </View>
                <View style={styles.genreContainer}>
                    {genres.map(genre => {
                        if (typeof genre === 'object') {

                            return <Genre genre={genre.Name} key={genre.ID}/>;
                        }
                    })}

                </View>
                <AntDesign name="right" size={36} color={green} style={{position: 'absolute', top: 20, right: 10,}}/>

            </View>
            
        </TouchableOpacity>
    );
}

