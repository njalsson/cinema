import { StyleSheet } from 'react-native';
import { gray } from '../../styles/colors';

export default StyleSheet.create({
    label: {
        color: gray,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20,
    },
    video: {
        aspectRatio: 16/9,
    }
});
