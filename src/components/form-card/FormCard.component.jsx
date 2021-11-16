import React from 'react';
import {
    FormContainer,
    FormContentContainer,
    FormImage
} from './FormCard.styles';

const FormCard = ({ imageUrl, reverse, children}) => (
    <FormContainer reverse={reverse}>
        <FormContentContainer>
            {children}
        </FormContentContainer>
        <FormImage src={imageUrl} reverse={reverse} />
    </FormContainer>
);

export default FormCard; 