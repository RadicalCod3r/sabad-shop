import React from 'react';
import FormCard from '../../components/form-card/FormCard.component';
import PrimaryButtonSmall from '../../components/buttons/primary-button/PrimaryButtonSmall.styles';
import { Link } from 'react-router-dom';
import SecondaryButtonMedium from '../../components/buttons/secondary-button/SecondaryButtonMedium.styles';
import FormInput from '../../components/form-input/FormInput.component';
import {
    SignInContainer,
    SignInFormContainer,
    FormTitle,
    FormContent,
    Hint
} from './SignIn.styles';
import GoogleSignInBtn from '../../components/buttons/google-sign-in-button/GoogleSignInBtn.component';
import { connect } from 'react-redux';
import { setIsShopping } from '../../redux/shop/shop.action';
import { 
    googleSignInStart,
    emailSignInStart
} from '../../redux/user/user.action';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        const { toggleIsShopping } = this.props;
        document.body.style.overflow='hidden';
        toggleIsShopping(false);
    }

    inputChangeListener = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        const { email, password } = this.state;
        const { startEmailSignIn } = this.props;
        startEmailSignIn({ email, password });
    }

    render() {
        const { email, password } = this.state;
        const { startGoogleSignIn } = this.props;
        return(
            <SignInContainer>
                <FormCard reverse={false} imageUrl="https://s4.uupload.ir/files/pexels-michael-burrows-7129160_(1)_luks.jpg">
                    <SignInFormContainer>
                        <FormTitle>ورود کاربر</FormTitle>
                        <FormContent>
                            <FormInput 
                                type='email' 
                                name='email'
                                value={email}
                                placeholder="ایمیل" 
                                iconName='envelope'
                                onInputChanged={this.inputChangeListener} />
                            <FormInput 
                                type='password' 
                                name='password'
                                value={password}
                                placeholder="رمز عبور" 
                                iconName='lock'
                                onInputChanged={this.inputChangeListener}/>
                            <Hint>
                                <p>رمز عبور خود را فراموش کرده اید؟</p>
                                <PrimaryButtonSmall>
                                    <Link to='/change-password' style={{color: '#3B668D', textDecoration: 'none'}}>
                                        تغییر رمز عبور
                                    </Link>
                                </PrimaryButtonSmall>
                            </Hint>
                            <SecondaryButtonMedium onClick={this.handleSubmit}>
                                ورود
                            </SecondaryButtonMedium>
                            <Hint>
                                <p>هنوز در سبد حساب کاربری ندارید؟</p>
                                <PrimaryButtonSmall>
                                    <Link to='/signup' style={{color: '#3B668D', textDecoration: 'none'}}>
                                        ثبت نام 
                                    </Link>
                                </PrimaryButtonSmall>
                            </Hint>
                            <GoogleSignInBtn onClick={startGoogleSignIn} />
                        </FormContent>
                    </SignInFormContainer>
                </FormCard>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    toggleIsShopping: (isShopping) => dispatch(setIsShopping(isShopping)),
    startGoogleSignIn: () => dispatch(googleSignInStart()),
    startEmailSignIn: emailAndPassword => dispatch(emailSignInStart(emailAndPassword))
})

export default connect(null, mapDispatchToProps)(SignInPage);