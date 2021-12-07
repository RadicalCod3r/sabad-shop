import React, { useState } from 'react';
import {
    ShopHeaderContainer,
    ShopHeaderSection,
    SearchContainer,
    HeaderLogo,
    SearchBar,
    SearchInput,
    CartContainer,
    CartIcon,
    SearchIcon,
    CartNumber
} from './ShopHeader.styles';
import PrimaryButtonMedium from '../buttons/primary-button/PrimaryButtonMedium.styles';
import './ShopHeader.styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setSearchKey } from '../../redux/search/search.action';
import { useNavigate } from 'react-router-dom';

const ShopHeader = ({ user, setSearchKey }) => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const onSearchClicked = () => {
        setSearchKey(searchInput);
        navigate('/shop/products/search');
    }
    return (
        <ShopHeaderContainer>
            <ShopHeaderSection>
                <Link to='/shop' style={{textDecoration: "none"}}>
                    <HeaderLogo src="https://s4.uupload.ir/files/logo2_bi7.jpg" />
                </Link>
                <SearchContainer>
                    <SearchBar>
                        <SearchIcon>
                            <i className="fas fa-search"></i>
                        </SearchIcon>
                        <SearchInput 
                            placeholder="جستجو در سبد"
                            onChange={(e) => setSearchInput(e.target.value)} />
                        <i 
                            className="fas fa-arrow-left"
                            onClick={onSearchClicked}></i>
                    </SearchBar>
                </SearchContainer>
            </ShopHeaderSection>
            <ShopHeaderSection>
                <PrimaryButtonMedium>
                {user ? (
                    <div onClick={() => {
                        signOut(auth);
                        console.log(`user is ${user}`)
                    }}>
                        خروج
                    </div>
                ) : (
                    <Link to='/signin' style={{textDecoration: 'none', color: '#3B668D'}} onClick={() => {
                        console.log(`user is ${user}`);
                    }}>
                        ورود کاربر
                    </Link>
                )}
                </PrimaryButtonMedium>
                <CartContainer>
                    <CartIcon>
                        <Link to='/cart' style={{textDecoration: "none", color: "#3B668D"}}>
                            <i className="fas fa-shopping-cart fa-2x" style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                                <CartNumber>{0}</CartNumber>
                            </i>
                        </Link>
                    </CartIcon>
                </CartContainer>
            </ShopHeaderSection>
        </ShopHeaderContainer>
    )
    
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setSearchKey: (keyword) => dispatch(setSearchKey(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);