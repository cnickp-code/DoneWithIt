import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen/Screen';

import AppForm from '../components/AppForm/AppForm';
import AppFormField from '../components/AppFormField/AppFormField';
import SubmitButton from '../components/SubmitButton/SubmitButton';
import AppFormPicker from '../components/AppFormPicker/AppFormPicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.string().required().nullable().label('Category'),
    description: Yup.string().label('Description')
})

const categories = [
    { 
        label: 'Furniture', 
        value: 1,
        icon: {
            name: 'floor-lamp',
            size: 80,
            backgroundColor: '#fc5c65'
        } 
    },
    { 
        label: 'Clothing', 
        value: 2,
        icon: {
            name: 'shoe-heel',
            size: 80,
            backgroundColor: '#2bcbba'
        }  
    },
    { 
        label: 'Cameras', 
        value: 3,
        icon: {
            name: 'camera',
            size: 80,
            backgroundColor: '#fed330'
        } 
    },
    { 
        label: 'Cars', 
        value: 4,
        icon: {
            name: 'car',
            size: 80,
            backgroundColor: '#fd9644'
        }  
    },
    { 
        label: 'Games', 
        value: 5,
        icon: {
            name: 'cards',
            size: 80,
            backgroundColor: '#26de81'
        } 
    },
    { 
        label: 'Sports', 
        value: 6,
        icon: {
            name: 'basketball',
            size: 80,
            backgroundColor: '#45aaf2'
        } 
    },
    { 
        label: 'Movies & Music', 
        value: 7,
        icon: {
            name: 'headphones',
            size: 80,
            backgroundColor: '#4b7bec'
        }  
    },
    { 
        label: 'Books', 
        value: 8,
        icon: {
            name: 'book',
            size: 80,
            backgroundColor: 'purple'
        } 
    },
    { 
        label: 'Other', 
        value: 9,
        icon: {
            name: 'camera',
            size: 80,
            backgroundColor: '#fed330'
        } 
    },
]

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ title: '', price: '', category: null, description: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={255}
                    placeholder="Title"
                    autoCorrect={false}
                    name="title"
                />
                <AppFormField
                    maxLength={8}
                    placeholder="Price"
                    keyboardType="numeric"
                    name="price"
                    width="40%"
                />


                <AppFormPicker
                    items={categories} 
                    placeholder="Category" 
                    name="category"
                    width="50%"
                    numberOfColumns={3}
                />
                <AppFormField
                    autoCapitalize="none"
                    multiline
                    numberOfLines={3}
                    placeholder="Description"
                    name="description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default ListingEditScreen;