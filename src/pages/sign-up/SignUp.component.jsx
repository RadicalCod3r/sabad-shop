import React from 'react';
import PrimaryButtonSmall from '../../components/buttons/primary-button/PrimaryButtonSmall.styles';
import SecondaryButtonMedium from '../../components/buttons/secondary-button/SecondaryButtonMedium.styles';
import FormCard from '../../components/form-card/FormCard.component';
import FormInput from '../../components/form-input/FormInput.component';
import { FormContent, FormTitle, Hint } from '../sign-in/SignIn.styles';
import { 
    SignUpContainer,
    SignUpFormContainer,
    ConditionsCheckBox
} from './SignUp.styles';

const SignUpPage = () => {
    document.body.style.overflow = 'hidden';
    return(
        <SignUpContainer>
            <FormCard imageUrl="https://s4.uupload.ir/files/pexels-teguh-sugi-6062178_(1)_netl.jpg" reverse={true}>
                <SignUpFormContainer>
                    <FormTitle>ثبت نام کاربر جدید</FormTitle>
                    <FormContent>
                        <FormInput type='email' placeholder="ایمیل" iconName='envelope' />
                        <FormInput type='password' placeholder="رمز عبور" iconName='lock' />
                        <FormInput type='password' placeholder="تکرار رمز عبور" iconName='lock' />
                        <Hint>
                        <ConditionsCheckBox />
                        <p>با قوانین و شرایط سبد موافقم</p>
                        <PrimaryButtonSmall>مشاهده قوانین</PrimaryButtonSmall>
                        </Hint>
                        <SecondaryButtonMedium>ثبت نام</SecondaryButtonMedium>
                    </FormContent>
                </SignUpFormContainer>
            </FormCard>
        </SignUpContainer>
    );
}

export default SignUpPage;