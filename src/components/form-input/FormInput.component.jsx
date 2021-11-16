import React from 'react';
import {
    FormInputContainer,
    Line,
    Input,
    LogoContainer
} from './FormInput.styles';

const FormInput = ({ placeholder, type, iconName }) => (
    <FormInputContainer>
        <LogoContainer>
            <i className={`fas fa-${iconName}`}></i>
        </LogoContainer>
        <Line />
        <Input type={type} placeholder={placeholder} />
    </FormInputContainer>
);

export default FormInput;