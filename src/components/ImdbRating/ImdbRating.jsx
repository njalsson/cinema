import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import imdblogo from '../../resources/Images/imdb.png';

export default function ImdbRating({rating}) {
    return (
        <View style={styles.ratingbox}>
            <Image source={imdblogo} style={styles.imdbimage} resizeMode='cover' />
            <Text style={styles.imdbrating}>{rating}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingbox: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#e6b91e',
        borderRadius: 20,
        padding: 3,
        paddingRight: 7,
        paddingLeft: 5,
    },
    imdbrating: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    imdbimage: {
        height: 18,
        width: 34,
    },
});
