import React, { useContext } from 'react';
import { useState } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    FlatList,
    Vibration
} from 'react-native';
import MenuItem from '../components/MenuItem/MenuItem';
import ListItem from '../components/ListItem/ListItem';
import Icon from '../components/Icon/Icon';
import Screen from '../components/Screen/Screen';

import routes from '../navigation/routes'
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator/ListItemSeparator';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
import useAuth from '../hooks/useAuth';

const menuItems = [
    {
        id: 1,
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        id: 2,
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES,
    },
]

function MyAccountScreen({ navigation }) {
    const [refreshing, setRefreshing] = useState(false)
    // const { user, setUser } = useContext(AuthContext);
    const { user, setUser, logout } = useAuth();

    const handleLogout = () => {
        // setUser(null);
        // authStorage.removeToken();
        logout();
    }

    return (
        <Screen>
            <View style={styles.container}>
                {/* <View style={styles.profileContainer}>
                    <Image style={styles.img} source={require('../assets/mosh.jpg')} />
                    <View style={styles.innerContainer}>
                        <Text style={styles.title}>Mosh Hamedani</Text>
                        <Text style={styles.subTitle}>programmingwithmosh@gmail.com</Text>
                    </View>
                </View> */}

                <ListItem
                    image={require('../assets/mosh.jpg')}
                    title={user.name}
                    description={user.email}
                />

                <View style={styles.optionsContainer}>
                    <FlatList
                        data={menuItems}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) =>
                            <ListItem
                                title={item.title}
                                IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                                onPress={() => navigation.navigate(item.targetScreen)}
                            />
                        }
                        ItemSeparatorComponent={() => <ListItemSeparator />}
                        refreshing={refreshing}

                    />
                </View>

                <View style={styles.logoutContainer}>
                    <ListItem
                        title={'Log Out'}
                        IconComponent={<Icon name={'logout'} backgroundColor={'#ffe66d'} />}
                        onPress={handleLogout}
                    />
                </View>
                {/* <View style={styles.optionsContainer}>
                <MenuItem
                    title={'My Listings'}
                    icon={'format-list-bulleted'}
                    backgroundColor={colors.primary}
                />
                <MenuItem
                    title={'My Messages'}
                    icon={'email'}
                    backgroundColor={colors.secondary}
                />
            </View> */}


            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: colors.light,
        justifyContent: 'flex-start',
    },
    profileContainer: {
        flexDirection: 'row',
        backgroundColor: colors.white,
    },
    innerContainer: {
        paddingLeft: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitle: {
        color: colors.medium,
        fontSize: 16,
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 70,
    },
    optionsContainer: {
        marginTop: 50,
        marginBottom: 25,
    }
})

export default MyAccountScreen;