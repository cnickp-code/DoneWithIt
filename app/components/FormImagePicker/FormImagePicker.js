import React from 'react';
import { useFormikContext } from 'formik';
import ImageInputList from '../ImageInputList/ImageInputList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function FormImagePicker({ name }) {
    const {setFieldValue, errors, touched, values} = useFormikContext();
    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
    }

    const handleRemove = (uri) => {
        const newUris = imageUris.filter(imageUri => imageUri !== uri);

        setFieldValue(name, newUris);
    }

    return (
        <>
            <ImageInputList 
                imageUris={values[name]} 
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}    
            />
            <ErrorMessage visible={touched[name]} error={errors[name]} />
        </>
    );
}


export default FormImagePicker;