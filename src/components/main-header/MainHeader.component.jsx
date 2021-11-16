import React from 'react';
import {
    MainHeaderContainer,
    HeaderLogoContainer,
    MenuItemsContainer,
    MenuItem
} from './MainHeader.styles';

import { HeaderLogo } from '../header/Header.styles';

const MainHeader = () => (
    <MainHeaderContainer>
        <MenuItemsContainer>
            <MenuItem to='/shop'>فروشگاه</MenuItem>
            <MenuItem to='/contact'>تماس با ما</MenuItem>
        </MenuItemsContainer>
        <HeaderLogoContainer>
            <HeaderLogo src="https://s4.uupload.ir/files/logo1_gdwj.jpg"/>
        </HeaderLogoContainer>

    </MainHeaderContainer>    
);

export default MainHeader;