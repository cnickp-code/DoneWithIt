import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen/Screen';

import AppForm from '../components/AppForm/AppForm';
import AppFormField from '../components/AppFormField/AppFormField';
import SubmitButton from '../components/SubmitButton/SubmitButton';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    placeholder="Name"
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="name"
                />
                <AppFormField
                    placeholder="Email"
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    name="email"
                    textContentType="emailAddress" //Only IOS
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    name="password"
                    textContentType="password"
                    secureTextEntry={true}
                />
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default RegisterScreen;