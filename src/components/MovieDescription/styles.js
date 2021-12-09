import { StyleSheet } from 'react-native';
import { gray, itemBackground, background } from '../../styles/colors';
export default StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: background,
        borderRadius: 10,
        width: '100%',
    },
    text: {
        color: gray,
        fontWeight: 'bold',
        fontSize: 16,
    },
    genreContainer: {
        marginTop: 20,
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
})