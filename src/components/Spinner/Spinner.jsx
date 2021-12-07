import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { gray } from '../../styles/colors';

const Spinner = () => (
    <View style={styles.spinner}>
        <ActivityIndicator color={gray} size="large" />
    </View>
);

export default Spinner;
 