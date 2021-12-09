import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';

import Ticket from '../../components/Ticket/Ticket';
import MovieModal from '../../components/MovieModal/MovieModal';
import styles from './styles';

export default function CinemaMovie({navigation}) {
    const movie = useSelector(state => state.upcomingMovie);

    useEffect(() => {
        navigation.setOptions({title: movie.title});
    }, []);

    return (
        <MovieModal realeaseLabel="Release date:" movie={movie}>

            {movie.trailers.length > 0 ?
                <View style={{width: '100%', marginTop: 20,}}>
                    <Text style={styles.label}>Watch trailer:</Text>
                    <WebView
                        source={{uri: 'https://www.youtube.com/embed/' + movie.trailers[0].results[0].key + '?rel=0&autoplay=0&showinfo=0&controls=0'}}
                        style={styles.video}
                    />
                </View>
                : <></>
            }

        </MovieModal>
    );
}

