import { StyleSheet } from 'react-native';
import { itemBackground, background, navigationBackground } from '../../styles/colors';
export default StyleSheet.create({
    container: {
        backgroundColor: itemBackground,
        borderRadius: 10,
        padding: 20,
        flexDirection: 'column',
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        paddingRight: 30,
    },
    subcontainer: {
        marginLeft: 20,
        flex: 1,
        justifyContent:'center'
    },
    genreContainer: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    ratingbox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        alignContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#e6b91e',
        width: 100,
        borderRadius: 24,
    },
    imdbrating: {
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 25,
        marginTop: 2
    },
    imdbimage: {
        flex: 1,
        height: 20,
        width: 20,
        borderRadius: 50,
    }
});
