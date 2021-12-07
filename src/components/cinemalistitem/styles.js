import { StyleSheet } from 'react-native';
import { itemBackground, gray, green } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        marginTop: 30,
        display: 'flex',
        width: '90%',
        marginLeft: 30,
        height: 100,
        borderRadius: 10,
        backgroundColor: itemBackground,
        flexDirection: 'row', 
        // justifyContent: 'flex-end'
    },
    cinemaName: {
        marginLeft: 20,
        marginTop: 10,
        color: 'white',
        fontSize:20
    },
    cinemaLink: {
        marginLeft: 30,
        marginTop: 10,
        color: gray,
        fontSize:15
    },
    arrow: {
        position: 'absolute',
        right: 20,
        top: 30,
        color: green

    },
});
