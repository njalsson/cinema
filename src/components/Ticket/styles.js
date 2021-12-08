import { StyleSheet } from 'react-native';
import { itemBackground } from '../../styles/colors';
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: itemBackground,
        width: '100%',
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
