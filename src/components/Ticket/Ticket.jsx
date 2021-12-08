import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { green } from '../../styles/colors';
import styles from './styles';

export default function Ticket() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mon, 6 des, 21:30</Text>
            <AntDesign name="right" size={36} color={green} />
        </View>
    );
}

