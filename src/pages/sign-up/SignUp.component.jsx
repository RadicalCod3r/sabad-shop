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
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.action';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    inputChangedListener = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        const { startSignUp } = this.props;

        if(password !== confirmPassword) {
            alert('لطفا تکرار رمز عبور را به درستی وارد کنید');
            return;
        }

        try {
            startSignUp({ displayName, email, password });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '' 
            })
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        document.body.style.overflow = 'hidden';
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <SignUpContainer>
                <FormCard imageUrl="https://s4.uupload.ir/files/pexels-teguh-sugi-6062178_(1)_netl.jpg" reverse={true}>
                    <SignUpFormContainer>
                        <FormTitle>ثبت نام کاربر جدید</FormTitle>
                        <FormContent>
                            <FormInput 
                                type='text'
                                name='displayName'
                                placeholder="نام کاربری"
                                value={displayName}
                                iconName='user'
                                onInputChanged={(e) => this.inputChangedListener(e)} />
                            <FormInput 
                                type='email'
                                name='email' 
                                placeholder="ایمیل" iconName='envelope'
                                value={email}
                                onInputChanged={(e) => this.inputChangedListener(e)} />
                            <FormInput 
                                type='password'
                                name='password'
                                placeholder="رمز عبور" 
                                value={password}
                                iconName='lock'
                                onInputChanged={(e) => this.inputChangedListener(e)} />
                            <FormInput 
                                type='password'
                                name='confirmPassword' 
                                placeholder="تکرار رمز عبور" 
                                value={confirmPassword}
                                iconName='lock'
                                onInputChanged={(e) => this.inputChangedListener(e)} />
                            <Hint>
                            <ConditionsCheckBox />
                            <p>با قوانین و شرایط سبد موافقم</p>
                            <PrimaryButtonSmall>مشاهده قوانین</PrimaryButtonSmall>
                            </Hint>
                            <SecondaryButtonMedium onClick={this.handleSubmit}>
                                ثبت نام
                            </SecondaryButtonMedium>
                        </FormContent>
                    </SignUpFormContainer>
                </FormCard>
            </SignUpContainer>
        );
    }
    
}

const mapDispatchToProps = dispatch => ({
    startSignUp: userInfo => dispatch(signUpStart(userInfo))
})

export default connect(null, mapDispatchToProps)(SignUpPage);