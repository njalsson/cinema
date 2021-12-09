import { StyleSheet } from 'react-native';
import { itemBackground } from '../../styles/colors';
export default StyleSheet.create({
    container: {
        backgroundColor: itemBackground,
        borderRadius: 10,
        padding: 20,
        flexDirection: 'column',
        marginBottom: 20,
        alignItems: 'center',
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
        justifyContent:'center',
        alignItems: 'flex-start',
    },
    genreContainer: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
});
