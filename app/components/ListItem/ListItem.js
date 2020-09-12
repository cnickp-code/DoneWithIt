import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableHighlight
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../config/colors';

function ListItem(props) {
    return (
        <Swipeable
            renderRightActions={props.renderRightActions}
        >
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={props.onPress}>
                <View style={styles.profileContainer}>
                    {props.IconComponent}
                    {props.image && <Image
                        style={styles.profileImg}
                        source={props.image}
                    />}
                    <View style={styles.profileInner}>
                        <Text style={styles.title}>
                            {props.title}
                        </Text>
                        {props.description && <Text style={styles.listings}>
                            {props.description}
                        </Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    profileInner: {
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