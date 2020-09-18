import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import AppPicker from '../AppPicker/AppPicker';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useFormikContext } from 'formik';

function AppFormPicker({ name, numberOfColumns, items, ...otherProps }) {
    const {setFieldValue, errors, touched, values} = useFormikContext();
    const [valueBool, setValueBool] = useState(false);

    const handleValue = (item) => {
        setFieldValue(name, item)
    }

    return (
        <>
            <AppPicker
                {...otherProps}
                items={items}
                numberOfColumns={numberOfColumns}
                selectedItem={values[name]}
                onSelectItem={item => handleValue(item)}
            />
            <ErrorMessage visible={touched[name]} error={errors[name]} />
        </>
    );
}

const styles = StyleSheet.create({
    
})

export default AppFormPicker;