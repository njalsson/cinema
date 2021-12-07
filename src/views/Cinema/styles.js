import { StyleSheet } from "react-native";
import { gray, blue, navigationBackground, itemBackground, background} from '../../styles/colors';

export default StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: navigationBackground,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    movies: {
        padding: 20
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        flexWrap: 'wrap',
    },
    label: {
        color: gray,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    textItem: {
        flexDirection: 'column',
    },
    link: {
        color: blue,
    }
});
