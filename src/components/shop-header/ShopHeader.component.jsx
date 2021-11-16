import React from 'react';
import {
    ShopHeaderContainer,
    ShopHeaderSection,
    SearchContainer,
    HeaderLogo,
    SearchBar,
    SearchInput,
    CartContainer,
    CartIcon,
    SearchIcon
} from './ShopHeader.styles';
import PrimaryButtonMedium from '../buttons/primary-button/PrimaryButtonMedium.styles';
import { Link } from 'react-router-dom';

const ShopHeader = () => (
    <ShopHeaderContainer>
        <ShopHeaderSection>
            <HeaderLogo src="https://s4.uupload.ir/files/logo2_bi7.jpg" />
            <SearchContainer>
                <SearchBar>
                    <SearchIcon>
                        <i className="fas fa-search"></i>
                    </SearchIcon>
                    <SearchInput placeholder="جستجو در سبد" />
                    {/* <input type='search' id='search' placeholder="جستجو در سبد" /> */}
                </SearchBar>
            </SearchContainer>
        </ShopHeaderSection>
        <ShopHeaderSection>
            <PrimaryButtonMedium>
                <Link to='/signin' style={{textDecoration: 'none', color: '#3B668D'}}>
                    ورود کاربر
                </Link>
            </PrimaryButtonMedium>
            <CartContainer>
                <CartIcon>
                    <Link to='/cart' style={{textDecoration: "none", color: "#3B668D"}}>
                        <i className="fas fa-shopping-cart fa-2x"></i>
                    </Link>
                </CartIcon>
            </CartContainer>
        </ShopHeaderSection>
    </ShopHeaderContainer>
)

export default ShopHeader;