import React, { useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, Linking, TouchableOpacity} from 'react-native';
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
        navigation.setOptions({title: 'Smárabío'});
    }, []);
    return (
        <ScrollView bounces={false}>
            <View style={styles.container}>
                <TextItem label="description:">
                    <Text style={styles.text}>Some long and descriptive description about the selected cinema</Text>
                </TextItem>
                <TextItem label="address:">
                    <TouchableOpacity onPress={() => {Linking.openURL('https://g.page/smarabiomax?share');}}>
                        <Text style={styles.text}>Hagasmára 1, 201 Kópavogi</Text>
                    </TouchableOpacity>
                </TextItem>
                <TextItem label="website:">
                    <TouchableOpacity onPress={() => {Linking.openURL('https://www.smarabio.is/');}}>
                        <Text style={[styles.text, styles.link]}>https://www.smarabio.is/</Text>
                    </TouchableOpacity>
                </TextItem>
                <TextItem label="phone:">
                    <TouchableOpacity onPress={() => {Linking.openURL('tel://5640000');}}>
                        <Text style={[styles.text, styles.link]}>564 0000</Text>
                    </TouchableOpacity>
                </TextItem>
            </View>

            <View style={styles.movies}>
                <Text style={[styles.text, {color: gray}]}>In cinema:</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CinemaMovie")}
                >
                
                    <MovieItem/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

