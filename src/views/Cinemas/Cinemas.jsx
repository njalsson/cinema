import React from 'react';
import { View, FlatList, TouchableOpacity} from 'react-native';

import CinemalistItem from '../../components/CinemaListItem/CinemaListItem';
import styles from './styles';

export default function Cinemas({navigation}) {
    var x = [{name:'Smárabío', link:'www.smarabio.is', id:1}, {name:'eitthvað bíó', link:'www.eitthvad.is', id:2}];
    return (
        <View>
            <FlatList style={styles.list}
        
                data={x}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {navigation.navigate("Cinema")}}
                        >

                            <CinemalistItem
                                name={item.name}
                                link={item.link}
                            />
                        </TouchableOpacity>

                    );
                }}
            />
        </View>
    );
}

