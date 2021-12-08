import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

import Ticket from '../../components/Ticket/Ticket';
import MovieModal from '../../components/MovieModal/MovieModal';
import styles from './styles';

export default function CinemaMovie({navigation}) {
    useEffect(() => {
        navigation.setOptions({title: 'Home alone'});
    }, []);

    return (
        <MovieModal realeaseLabel="Release date:">

            <View style={{width: '100%', marginTop: 20,}}>
                <Text style={styles.label}>Watch trailer:</Text>
                <WebView
                    source={{uri: 'https://www.youtube.com/embed/jEDaVHmw7r4?rel=0&autoplay=0&showinfo=0&controls=0'}}
                    style={styles.video}
                />

            </View>
        </MovieModal>
    );
}

