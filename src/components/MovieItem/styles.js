import { StyleSheet } from 'react-native';
import { itemBackground, background, navigationBackground } from '../../styles/colors';
export default StyleSheet.create({
    container: {
        backgroundColor: itemBackground,
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
    },
    subcontainer: {
        marginLeft: 20,
        flex: 1,
    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
