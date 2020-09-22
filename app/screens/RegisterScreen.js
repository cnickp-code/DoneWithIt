import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen/Screen';

import AppForm from '../components/AppForm/AppForm';
import AppFormField from '../components/AppFormField/AppFormField';
import SubmitButton from '../components/SubmitButton/SubmitButton';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import authApi from '../api/auth';
import useAuth from '../hooks/useAuth';
import useApi from '../hooks/useApi';
import AppActivityIndicator from '../components/AppActivityIndicator/AppActivityIndicator';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function RegisterScreen(props) {
    const [error, setError] = useState();
    const auth = useAuth();

    // Using authApi service for Activity Indicator
    const registerApi = useApi(authApi.register);
    const loginApi = useApi(authApi.login)


    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        // Multiple errors occur, including generic (i.e. offline)
        if (!result.ok) {
            if (result.data) {
                setError(result.data.error);
            } else {
                setError('An unexpected error occurred.');
                console.log(result);
            }
            return;
        }

        // Destructure data and rename to authToken
        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        );

        // Directly logs in user.
        auth.login(authToken);
    }

    return (
        <>
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{ name: '', email: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {error && <ErrorMessage error={error} visible={true} />}
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
            <AppActivityIndicator visible={registerApi.loading || loginApi.loading} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default RegisterScreen;