import React from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';

export default function MoviePoster({uri, size}) {
    return (

        <Image
            style={size === 'large' ? [styles.image, {height: 300}] : styles.image}
            source={{uri: uri}}
            resizeMode='stretch'
        />


    );
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        borderRadius: 10,
        aspectRatio: 2/3,
    }
});
