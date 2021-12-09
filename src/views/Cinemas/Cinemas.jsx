import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getCinemas } from '../../actions/cinemasActions';
import { changeCurrentCinema } from '../../actions/cinemaActions';
import Spinner from '../../components/Spinner/Spinner';
import CinemalistItem from '../../components/CinemaListItem/CinemaListItem';
import styles from './styles';

export default function Cinemas({navigation}) {
    const dispatch = useDispatch();
    const cinemas = useSelector(state => state.cinemas);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getCinemas());
        setLoading(false);
    }, []);

    

    return (
        <>
            {loading ? <Spinner/> :
                <View>
            
                    <FlatList
                        style={styles.list}
                        contentContainerStyle={{paddingBottom: 50,}}
                        data={cinemas}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        dispatch(changeCurrentCinema(item));
                                        navigation.navigate('Cinema');
                                    }}
                                >

                                    <CinemalistItem
                                        name={item.name}
                                        link={item.website}
                                    />
                                </TouchableOpacity>

                            );
                        }}
                    />
                </View>
            }
        </>
    );
}

