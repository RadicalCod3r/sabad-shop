import React from 'react';

import {
    ButtonContainer,
    GoogleIcon,
    Title
} from './GoogleSignInBtn.styles';

const GoogleSignInBtn = () => (
    <ButtonContainer>
        <GoogleIcon>
            <i className="fab fa-google"></i>
        </GoogleIcon>
        <Title>ثبت نام با حساب گوگل</Title>
    </ButtonContainer>
);

export default GoogleSignInBtn;