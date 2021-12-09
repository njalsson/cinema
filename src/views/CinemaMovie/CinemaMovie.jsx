import React, { useEffect, useState } from 'react';
import { Text, View, } from 'react-native';
import { useSelector } from 'react-redux';

import Ticket from '../../components/Ticket/Ticket';
import MovieModal from '../../components/MovieModal/MovieModal';
import styles from './styles';

export default function CinemaMovie({navigation}) {
    useEffect(() => {
        navigation.setOptions({title: 'Home alone'});
    }, []);

    const movie = useSelector(state => state.movies.currentMovie);
    const cinema = useSelector(state => state.cinema);
    const [tickets, setTickets] = useState(movie.showtimes.find(s => s.cinema.id === cinema.id).schedule);

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

