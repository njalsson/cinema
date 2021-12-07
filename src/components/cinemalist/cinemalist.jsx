import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import CinemalistItem from '../cinemalistitem/cinemalistItem';

export default function Cinemalist({array}) {
    return (            <FlatList style={styles.list}
        
        data={array}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
            return (
                <TouchableOpacity
                    onPress={() => console.log('hello')}
                >
                    <CinemalistItem
                        name={item.name}
                        link={item.link}
                    />
                </TouchableOpacity>
            );
        }}
    />);
}