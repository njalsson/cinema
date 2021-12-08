import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import styles from './styles';
import Genre from '../Genre/Genre';
export default function MovieDescription({realeaseLabel}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, {marginBottom: 10}]}>The long plot of the home alone movie, this is very long. Hopefully you can read it all.</Text>
            <Text style={styles.text}>{realeaseLabel} 1990</Text>
            <Text style={[styles.text, {marginBottom: 10}]}>Duration: 133 minutes</Text>
            <View style={styles.genreContainer}>
                <Genre genre="Family-friendly"/>
                <Genre genre="comedy"/>
                <Genre genre="action"/>
                <Genre genre="christmas"/>
            </View>
        </View>
    )
}

