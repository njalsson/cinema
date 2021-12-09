import React, { useEffect, useState } from 'react';
import { View, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcoming } from '../../actions/upcomingActions';
import { changeUpcomingMovie } from '../../actions/upcomingMovieActoins';
import Spinner from '../../components/Spinner/Spinner';
import MovieItem from '../../components/MovieItem/MovieItem';
import styles from './styles';

export default function Upcoming({navigation}) {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.upcoming);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setLoading(true);
        dispatch(getUpcoming());
    }, []);

    useEffect(()=> {
        if (movies.length >0) {
            setLoading(false);
        }
    },[movies]);


    return (
        <>
            {loading ? <Spinner/> :
            
                <ScrollView>
                    <View style={styles.container}>
                        {movies.map( movie => {
                            return (

                                <MovieItem
                                    onPress={()=>{
                                        dispatch(changeUpcomingMovie(movie));
                                        navigation.navigate('UpcomingMovie');
                                    }}
                                    movie={movie}
                                    key={movie.id}    
                                />
                            );
                        })}



                    </View>
                </ScrollView>
            }
        </>


    );
}


