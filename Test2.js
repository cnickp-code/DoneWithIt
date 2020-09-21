import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './app/components/Screen/Screen';

const Link = () => {
    const navigation = useNavigation(); // gain access to navigation object

    return (
        <Button
            title="Click"
            onPress={() => navigation.navigate('TweetDetails', { id: 1 })} // Passing object info as params through routes
        />
    );
}

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Link />
    </Screen>
)

const TweetDetails = ({ route }) => (
    // useRoute() for child components
    <Screen>
        <Text>Tweet Details {route.params.id} </Text>
    </Screen>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: "tomato" },
            headerTintColor: "white",
        }}
    >
        <Stack.Screen
            name="Tweets"
            component={Tweets}
            // options={{
            //     headerStyle: { backgroundColor: "tomato" },
            //     headerTintColor: "white",
            //     headerShown: false,
            // }}
        />
        <Stack.Screen
            name="TweetDetails"
            component={TweetDetails}
            options={({ route }) => ({ title: route.params.id })} // Can be object or function returning object and dynamically using routeprops
        />
    </Stack.Navigator>
)

const Account = () => (
    <Screen>
        <Text>Account</Text>
    </Screen>
)


// Each tab should have own stack navigator. FeedNavigator, AccountNavigator. Nesting navigators
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: 'tomato',
            activeTintColor: 'white',
            inactiveBackgroundColor: '#eee',
            inactiveTintColor: 'black',
        }}
    >
        <Tab.Screen 
            name="Feed" 
            component={StackNavigator} 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="home" size={size} color={color} /> // prop is what RN suggests
                )
            }}
        />
        <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
)

function Test2(props) {
    return (
        <NavigationContainer>
            {/* <StackNavigator /> */}
            <TabNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Test2;