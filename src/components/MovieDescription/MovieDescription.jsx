/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Genre from '../Genre/Genre';

export default function MovieDescription({realeaseLabel, movie}) {
    const { year, durationMinutes, plot, genres} = movie;
    const releaseDate = movie['release-dateIS'];
    const directorsarray = movie['directors_abridged'];
    const actorsarray = movie['actors_abridged'];
    const certificate = movie['certificate'];
    var moviedirectors = '';
    for (var i = 0; i < directorsarray.length; i++){
        moviedirectors += directorsarray[i].name;
        if (i != directorsarray.length-1){
            moviedirectors += ', ';
        }
    }
    var movieactors = '';
    for (var j = 0; j < actorsarray.length; j++){
        movieactors += actorsarray[j].name;
        if (j != actorsarray.length-1){
            movieactors += ', ';
        }
    }

    return (
        <View style={styles.container}>
            
            <Text style={[styles.text, {marginBottom: 10}]}>{plot}</Text>
            <Text style={styles.text}>{realeaseLabel} {releaseDate ? releaseDate : year}</Text>
            {durationMinutes ? 
                <Text style={[styles.text,]}>Duration: {durationMinutes} minutes</Text>
                : <></>
            }
            {directorsarray.length > 0 ?
                <Text style={[styles.text,]}>director: {moviedirectors}</Text> : <></>}
            {actorsarray.length > 0 ?
                <Text style={[styles.text,]}>Lead actors: {movieactors}</Text> : <></>}
            {certificate ?
                <View style={{flexDirection:'row'}}><Text style={styles.text}>Age restriction: </Text>
                    <Text style={[styles.text,{color:certificate.color}]}> {certificate.is}</Text> 
                </View>
                :
                <></> }
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

