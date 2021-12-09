/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import { useSelector } from 'react-redux';

import Ticket from '../../components/Ticket/Ticket';
import MovieModal from '../../components/MovieModal/MovieModal';
import ImdbRating from '../../components/ImdbRating/ImdbRating';

import styles from './styles';

export default function CinemaMovie({navigation}) {
    
    const movie = useSelector(state => state.movies.currentMovie);
    const cinema = useSelector(state => state.cinema);
    const [tickets, setTickets] = useState(movie.showtimes.find(s => s.cinema.id === cinema.id).schedule);
    const rating = movie.hasOwnProperty('ratings');

    useEffect(() => {
        navigation.setOptions({
            title: movie.title,
            headerRight: () => {
                return (
                    rating && movie.ids.imdb ? 
                        <View style={{marginRight: 8}}>
                            <TouchableOpacity onPress={() => {Linking.openURL('https://imdb.com/title/tt' + movie.ids.imdb);}}>
                                <ImdbRating rating={movie.ratings.imdb}/>
                            </TouchableOpacity>
                        </View>
                        : <></>
                );
            },
        });
    }, []);
    
    return (
        <MovieModal realeaseLabel="Released:" movie={movie}>
            <View style={{width: '100%', marginTop: 20,}}>
                <Text style={styles.label}>Buy tickets:</Text>
                {tickets.map(ticket => {
                    return (
                        <Ticket ticket={ticket} cinemaName={cinema.name} key={ticket.purchase_url}/>
                    );
                })}

            </View>
        </MovieModal>
    );
}

