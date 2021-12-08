import { StyleSheet } from 'react-native';
import { gray } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 50,
        width: '100%',
        flexGrow: 1,
    },
    label: {
        color: gray,
        fontWeight: 'bold',
        fontSize: 16,
    }
});
