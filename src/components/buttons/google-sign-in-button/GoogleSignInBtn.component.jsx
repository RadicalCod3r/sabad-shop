import React from 'react';

import {
    ButtonContainer,
    GoogleIcon,
    Title
} from './GoogleSignInBtn.styles';

const GoogleSignInBtn = ({ onClick }) => (
    <ButtonContainer onClick={onClick}>
        <GoogleIcon>
            <i className="fab fa-google"></i>
        </GoogleIcon>
        <Title>ثبت نام با حساب گوگل</Title>
    </ButtonContainer>
);

export default GoogleSignInBtn;