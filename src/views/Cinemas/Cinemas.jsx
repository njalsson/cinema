import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
import Spinner from '../../components/Spinner/Spinner';
import Cinemalist from '../../components/cinemalist/cinemalist';
export default function Cinemas({navigation}) {
    var x = [{name:'Smárabío', link:'www.smarabio.is'}, {name:'eitthvað bíó', link:'www.eitthvad.is'},{name:'Smárabío', link:'www.smarabio.is'}, {name:'eitthvað bíó', link:'www.eitthvad.is'},{name:'Smárabío', link:'www.smarabio.is'}, {name:'eitthvað bíó', link:'www.eitthvad.is'},{name:'Smárabío', link:'www.smarabio.is'}, {name:'eitthvað bíó', link:'www.eitthvad.is'}];
    return (
        <View>
            <Button title="check out cinema modal" onPress={() => navigation.navigate('Cinema')}/>
            <Cinemalist array={x} />
        </View>
    );
}

const styles = StyleSheet.create({});
