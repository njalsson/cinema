import React, { useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View} from 'react-native';
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


export default function Cinema({navigation}) {
    useEffect(() => {
        navigation.setOptions({title: 'Smárbío'});
    }, []);
    return (
        <ScrollView bounces={false}>
            <View style={styles.container}>
                <TextItem label="description:">
                    <Text style={styles.text}>Some long and descriptive description about the selected cinema</Text>
                </TextItem>
                <TextItem label="address:">
                    <Text style={styles.text}>Hagasmára 1, 201 Kópavogi</Text>
                </TextItem>
                <TextItem label="website:">
                    <Text style={[styles.text, styles.link]}>https://www.smarabio.is/</Text>
                </TextItem>
                <TextItem label="phone:">
                    <Text style={[styles.text, styles.link]}>564 0000</Text>
                </TextItem>
            </View>

            <View style={styles.movies}>
                <Text style={[styles.text, {color: gray}]}>In cinema:</Text>
                <MovieItem></MovieItem>
                <MovieItem></MovieItem>
                <MovieItem></MovieItem>
                <MovieItem></MovieItem>

            </View>
        </ScrollView>
    );
}

