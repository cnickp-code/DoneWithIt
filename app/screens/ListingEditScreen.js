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
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Cameras', value: 3 },
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
                />


                <AppFormPicker
                    items={categories} 
                    placeholder="Category" 
                    name="category"
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