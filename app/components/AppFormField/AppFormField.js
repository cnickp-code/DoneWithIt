import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput/AppTextInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function AppFormField({ name, ...otherProps }) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <AppTextInput
                {...otherProps}

                onChangeText={handleChange(name)} // prop in initialValues
                onBlur={() => setFieldTouched(name)}
            />
            <ErrorMessage visible={touched[name]} error={errors[name]} />
        </>
    );
}

export default AppFormField;