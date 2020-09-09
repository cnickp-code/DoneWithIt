import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton/AppButton';
import Card from './app/components/Card/Card';
import ListDetails from './app/components/ListDetails/ListDetails';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// <Heading>My Heading</Heading>
export default function App() {

  return (
    // <WelcomeScreen />

    // <View style={styles.container}>
    //   <Card 
    //     title={"Red jacket for sale!"}
    //     subTitle={"$100"}
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    // </View>

    <ListDetails 
        title={"Red jacket for sale!"}
        subTitle={"$100"}
        image={require('./app/assets/jacket.jpg')}
        profileImage={require('./app/assets/mosh.jpg')}
        profileName={'Mosh Hamedani'}
        profileListings={'5 Listings'}
    />

    // <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    paddingTop: 50,
    alignItems: 'center',
  },
});
