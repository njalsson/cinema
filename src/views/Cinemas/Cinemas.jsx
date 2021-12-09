import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getCinemas } from '../../actions/cinemasActions';
import { getMovies, changeCurrentMovies } from '../../actions/moviesActions';
import { changeCurrentCinema } from '../../actions/cinemaActions';
import Spinner from '../../components/Spinner/Spinner';
import CinemalistItem from '../../components/cinemalistItem/cinemalistItem';
import styles from './styles';

export default function Cinemas({navigation}) {

    const dispatch = useDispatch();
    const cinemas = useSelector(state => state.cinemas);
    const [loading, setLoading] = useState(true);
    const movies = useSelector(state => state.movies.movies);

    useEffect(() => {
        setLoading(true);
        dispatch(getCinemas());
        dispatch(getMovies());
        setLoading(false);
    }, []);

    const filterMoviesById = id => {
        const m = movies.filter(i => i.showtimes.find(c => c.cinema.id === id));
        dispatch(changeCurrentMovies(m));
    };

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
                                        filterMoviesById(item.id);
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

