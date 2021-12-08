import React, { useEffect } from 'react';
import { Text, View, } from 'react-native';
import Ticket from '../../components/Ticket/Ticket';
import MovieModal from '../../components/MovieModal/MovieModal';
import styles from './styles';

export default function CinemaMovie({navigation}) {
    useEffect(() => {
        navigation.setOptions({title: 'Home alone'});
    }, []);

    return (
        <MovieModal realeaseLabel="Released:">

            <View style={{width: '100%', marginTop: 20,}}>
                <Text style={styles.label}>Buy tickets:</Text>
                <Ticket></Ticket>
                <Ticket></Ticket>
                <Ticket></Ticket>

            </View>
        </MovieModal>
    );
}

