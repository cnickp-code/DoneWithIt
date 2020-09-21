import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListDetailsScreen from '../screens/ListDetailsScreen'

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="ListDetailsScreen" component={ListDetailsScreen} />
    </Stack.Navigator>
)

export default FeedNavigator;