import React from 'react';
import MainHeader from '../main-header/MainHeader.component';
import ShopHeader from '../shop-header/ShopHeader.component';
import { connect } from 'react-redux';

const Header = ({ isInShopMode }) => {
    if(isInShopMode) {
        return <ShopHeader />;
    } else {
        return(
            <MainHeader />
        );
    }
}

const mapStateToProps = ({ shop: { isShopping } }) => ({
    isInShopMode: isShopping
});

export default connect(mapStateToProps)(Header);