import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { green } from '../../styles/colors';
import styles from './styles';

export default function Ticket({ticket, cinemaName}) {
    const {time, purchase_url} = ticket;
    return (
        <TouchableOpacity
            onPress={() => Linking.openURL(purchase_url)}
        >    
            <View style={styles.container}>
                <Text style={styles.text}>{time}, {cinemaName}</Text>
                <AntDesign name="right" size={36} color={green} />
            </View>
        </TouchableOpacity>
    );
}

