import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../css/Styles'


export default function Header() {
    return (
        <View style={styles.login}>
            <Text style={styles.titulo}>Login</Text>
        </View>
    )

}