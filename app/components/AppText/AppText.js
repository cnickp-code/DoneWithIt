import React from 'react';
import { Text } from 'react-native';

import styles from './styles'
import defaultStyles from '../../config/styles';

function AppText(props) {
    return (
        <Text style={{...defaultStyles.text, ...props.style}}>{props.children}</Text>
    );
}

export default AppText;