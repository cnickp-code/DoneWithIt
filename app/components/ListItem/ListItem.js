import React from 'react';
import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../config/colors';

function ListItem(props) {
    const [showChevrons, setShowChevrons] = useState(true);

    return (
        <Swipeable
            renderRightActions={props.renderRightActions}
        >
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={props.onPress}>
                <View style={styles.container}>
                    <View style={styles.profileContainer}>
                        {props.IconComponent}
                        {props.image && <Image
                            style={styles.profileImg}
                            source={props.image}
                        />}
                        <View style={styles.profileInner}>
                            <Text style={styles.title} numberOfLines={1}>
                                {props.title}
                            </Text>
                            {props.description && <Text style={styles.listings} numberOfLines={2}>
                                {props.description}
                            </Text>}
                        </View>
                        {showChevrons && <MaterialCommunityIcons
                            size={20}
                            colors={colors.medium}
                            name='chevron-right'
                        />}
                    </View>


                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingRight: 10,
    },
    profileContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    profileInner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
    },
    listings: {
        fontSize: 16,
        color: 'grey',
    },
    profileImg: {
        width: 70,
        height: 70,
        borderRadius: 70,
        marginLeft: 10,
    },
})

export default ListItem;