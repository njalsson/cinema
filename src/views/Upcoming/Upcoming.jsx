import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Spinner from '../../components/Spinner/Spinner';
import MovieItem from '../../components/MovieItem/MovieItem';
import styles from './styles';

export default function Upcoming({navigation}) {
    return (
        <ScrollView>
            <View style={styles.container}>

                <MovieItem onPress={()=>navigation.navigate("UpcomingMovie")}/>
                <MovieItem onPress={()=>navigation.navigate("UpcomingMovie")}/>
                <MovieItem onPress={()=>navigation.navigate("UpcomingMovie")}/>
                <MovieItem onPress={()=>navigation.navigate("UpcomingMovie")}/>



            </View>
        </ScrollView>


    );
}


