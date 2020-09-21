import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Switch
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListDetailsScreen from './app/screens/ListDetailsScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import Screen from './app/components/Screen/Screen';

import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton/AppButton';
import Card from './app/components/Card/Card';
import Icon from './app/components/Icon/Icon';
import ListDetails from './app/components/ListDetails/ListDetails';
import ListItem from './app/components/ListItem/ListItem';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput/AppTextInput';
import AppPicker from './app/components/AppPicker/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

import Test from './Test'; // Image input form
import Test2 from './Test2'; // Navigator
import ImageInput from './app/components/ImageInput/ImageInput';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';

// <Heading>My Heading</Heading>

const categories = [
  { label: 'Furniture', value: 1}, 
  { label: 'Clothing', value: 2}, 
  { label: 'Cameras', value: 3}, 
]

export default function App() {

  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState();

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

    // <MessagesScreen />
    // <MyAccountScreen />

    // <Screen>
    //   <ListItem 
    //     title="My title" 
    //     ImageComponent={<Icon name="email" />}
    //   />
    // </Screen>
    // <ListingsScreen />

    // <Screen>
    //   <AppTextInput 
    //     icon="email"
    //     placeholder="Username" 
    //   />
    // </Screen>

    // Styles for android make it on right. IOS = left
    // <Screen>
    //   <Switch 
    //     value={isNew} 
    //     onValueChange={newValue => setIsNew(newValue)} />
    // </Screen>

    // <Screen>
    //   <AppPicker 
    //     items={categories} 
    //     icon="apps" 
    //     placeholder="Category" 
    //     selectedItem={category}
    //     onSelectItem={item => setCategory(item)}
    //   />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </Screen>

    // <LoginScreen />
    // <RegisterScreen />
    // <ListingEditScreen />
    // <Test />

    // <Screen>
    //   <ImageInput imageUri={imageUri} />
    // </Screen>

    // <ListingEditScreen />

    // <Test2 />

    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>

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
