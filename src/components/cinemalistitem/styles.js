import { StyleSheet } from 'react-native';
import { itemBackground, gray, green } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: itemBackground,
        flexDirection: 'row',
        padding:20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cinemaName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    cinemaLink: {
        color: gray,
        fontSize:18
    },
    arrow: {
        color: green,
    },
});
