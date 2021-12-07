import React from 'react';
import {
    FormInputContainer,
    Line,
    Input,
    LogoContainer,
    LogoText,
    TextContainer
} from './FormInput.styles';

const FormInput = ({ placeholder, name, type, value, iconName, logoText, onInputChanged, reversed }) => (
    <FormInputContainer reversed={reversed}>
        {logoText ? (
            <TextContainer>
                <LogoText>{logoText}</LogoText>
            </TextContainer>
        ) : (
            <LogoContainer>
                <i className={`fas fa-${iconName}`}></i>
            </LogoContainer>
        )}
        <Line />
        <Input 
            type={type} 
            name={name} 
            placeholder={placeholder}
            value={value}
            onChange={onInputChanged} />
    </FormInputContainer>
);

export default FormInput;