import React from 'react';
import AppButton from '../AppButton/AppButton';
import { useFormikContext } from 'formik';

import colors from '../../config/colors';

function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton
            color={colors.primary}
            title={title}


            onPress={handleSubmit} />
    );
}

export default SubmitButton;