import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

export default function CinemalistItem({name, link}) {
    return (
        <View style={styles.container}><View>
            <Text style={styles.cinemaName}>{name}</Text>
            <Text style={styles.cinemaLink}>{link}</Text>
        </View>
        <AntDesign style={styles.arrow} name="right" size={34} color="white" />
        </View>);
}

CinemalistItem.propTypes = {
    name: PropTypes.object.isRequired,
    link: PropTypes.object.isRequired
};