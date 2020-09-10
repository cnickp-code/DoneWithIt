import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListDetailsScreen from './app/screens/ListDetailsScreen';

import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton/AppButton';
import Card from './app/components/Card/Card';
import ListDetails from './app/components/ListDetails/ListDetails';

import { MaterialCommunityIcons } from '@expo/vector-icons';

// <Heading>My Heading</Heading>
export default function App() {

  return (
    // <WelcomeScreen />

    // <ScrollView contentContainerStyle={styles.container}>
    //   <Card
    //     title={"Red jacket for sale!"}
    //     subTitle={"$100"}
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    //   <Card
    //     title={"Red jacket for sale!"}
    //     subTitle={"$100"}
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    //   <Card
    //     title={"Red jacket for sale!"}
    //     subTitle={"$100"}
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    // </ScrollView>

    // <AppButton title="Login" onPress={() => console.log('Tapped')} />

    // <ListDetailsScreen 
    //     title={"Red jacket for sale!"}
    //     subTitle={"$100"}
    //     image={require('./app/assets/jacket.jpg')}
    //     image={require('./app/assets/mosh.jpg')}
    //     title={'Mosh Hamedani'}
    //     description={'5 Listings'}
    // />

    // <ViewImageScreen />

    <MessagesScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
});
