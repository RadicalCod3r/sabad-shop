import React from 'react';
import MainHeader from '../main-header/MainHeader.component';
import ShopHeader from '../shop-header/ShopHeader.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsShopping } from '../../redux/shop/shop.selectors';

const Header = ({ isInShopMode }) => {
    if(isInShopMode) {
        return <ShopHeader />;
    } else {
        return(
            <MainHeader />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isInShopMode: selectIsShopping
});

export default connect(mapStateToProps)(Header);