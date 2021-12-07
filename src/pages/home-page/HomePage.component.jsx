import React from 'react';
import {
    HomePageContainer,
    HomePageBackground,
    ContentContainer,
    TextContent,
    HighlightText,
    CustomLink
} from './HomePage.styles';
import PrimaryButtonLarge from '../../components/buttons/primary-button/PrimaryButtonLarge.styles';
import ProductBoxLarge from '../../components/product-box/ProductBoxLarge.component';

import { connect } from 'react-redux';
import { setIsShopping } from '../../redux/shop/shop.action';
import { fetchProductsStart } from '../../redux/shop/shop.action';
import Loader from '../../components/Loader/Loader.component';
import {
    selectIsProductsLoading,
    selectProducts    
} from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    } 

    componentDidMount() {
        const { toggleShoppingMode } = this.props;
        toggleShoppingMode(false);
        document.body.style.overflow = 'hidden';
    }
    
    render() {
        const { products, isLoading } = this.props;
        console.log(isLoading);
        return(
            // <Loader isLoading={isLoading}>
                <HomePageContainer>
                    <HomePageBackground src='https://s4.uupload.ir/files/pexels-shvets-production-7195232_w6s5.jpg'/>
                    <ContentContainer>
                        <TextContent>تخفیف های شگفت انگیز در <HighlightText>چهارشنبه های شگفت انگیز</HighlightText></TextContent>
                        <PrimaryButtonLarge>
                            <CustomLink to='/shop'>شروع</CustomLink>
                        </PrimaryButtonLarge>
                    </ContentContainer>
                    <ProductBoxLarge product={products[Math.floor(Math.random() * 57)]} boxTitle="پیشنهاد سبد" />
                </HomePageContainer>
            /* </Loader> */
        );
    }
}

const mapDispatchToProps = dispatch => ({
    toggleShoppingMode: (isShopping) => dispatch(setIsShopping(isShopping)),
    startFetchingProducts: () => dispatch(fetchProductsStart())
});

const mapStateToProps = createStructuredSelector({
    products: selectProducts,
    isLoading: selectIsProductsLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);