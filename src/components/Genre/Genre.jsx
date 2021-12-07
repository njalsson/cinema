import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { background, gray, navigationBackground } from '../../styles/colors'

export default function Genre({genre}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{genre}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: 5,
        marginRight: 5,
        backgroundColor: navigationBackground,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 14,
        color: gray,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    genreContainer: {

    }
})
