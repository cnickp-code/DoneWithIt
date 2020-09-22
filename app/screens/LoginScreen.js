import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/auth';
import Screen from '../components/Screen/Screen';

// Refactor into index.js!!
import { AppForm, AppFormField, SubmitButton } from '../components/Forms/index';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

// import AppFormField from '../components/AppFormField/AppFormField';
// import SubmitButton from '../components/SubmitButton/SubmitButton';
// import AppForm from '../components/AppForm/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {
    const [loginFailed, setLoginFailed] = useState(false);
    // const authContext = useContext(AuthContext);
    const auth = useAuth();

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
    
        if(!result.ok) {
            return setLoginFailed(true);
        }
        setLoginFailed(false);
        
        // const user = jwtDecode(result.data);
        // authContext.setUser(user);
        // authStorage.storeToken(result.data);

        auth.login(result.data);
    }

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password." visible={loginFailed} />
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
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;
