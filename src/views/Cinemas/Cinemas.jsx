import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Spinner from '../../components/Spinner/Spinner';
export default function Cinemas({navigation}) {
    return (
        <Button title="check out cinema modal" onPress={() => navigation.navigate('Cinema')}/>
    );
}

const styles = StyleSheet.create({});
