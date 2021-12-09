import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, View, Linking, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

import MovieItem from '../../components/MovieItem/MovieItem';
import { gray } from '../../styles/colors';


const TextItem = ({label, children}) => {
    return (
        <View style={styles.textItem}>
            <Text style={styles.label}>
                {label}
            </Text>
            {children}
        </View>
    );
};


export default function Cinema({navigation, route}) {
    const cinema = useSelector(state => state.cinema);
    useEffect(() => {
        
        navigation.setOptions({title: cinema.name});
    }, []);
    return (
        <ScrollView bounces={false}>
            <View style={styles.container}>
                <TextItem label="description:">
                    <Text style={styles.text}>{cinema.description}</Text>
                </TextItem>
                <TextItem label="address:">
                    <Text style={styles.text}>{cinema.address}</Text>
                </TextItem>
                <TextItem label="website:">
                    <TouchableOpacity onPress={() => {Linking.openURL('https://' + cinema.website);}}>
                        <Text style={[styles.text, styles.link]}>{cinema.website}</Text>
                    </TouchableOpacity>
                </TextItem>
                <TextItem label="phone:">
                    <TouchableOpacity onPress={() => {Linking.openURL('tel://' + cinema.phone);}}>
                        <Text style={[styles.text, styles.link]}>{cinema.phone}</Text>
                    </TouchableOpacity>
                </TextItem>
            </View>

            <View style={styles.movies}>
                <Text style={[styles.text, {color: gray}]}>In cinema:</Text>

                
                <MovieItem onPress={() => navigation.navigate('CinemaMovie')}/>
            </View>
        </ScrollView>
    );
}

