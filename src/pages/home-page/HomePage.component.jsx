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
import { PersentageContainerLarge } from '../../components/persentage-container/PersentageContainer.styles';
import ProductBoxLarge from '../../components/product-box/ProductBoxLarge.component';

import products from '../../data/products';
import { connect } from 'react-redux';
import { setIsShopping } from '../../redux/shop/shop.action';

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
        return(
            <HomePageContainer>
                <HomePageBackground src='https://s4.uupload.ir/files/pexels-shvets-production-7195232_w6s5.jpg'/>
                <ContentContainer>
                    <TextContent>تا <PersentageContainerLarge>٪60</PersentageContainerLarge> تخفیف در چهارشنبه های <HighlightText>شصت درصدی</HighlightText></TextContent>
                    <PrimaryButtonLarge>
                        <CustomLink to='/shop'>شروع</CustomLink>
                    </PrimaryButtonLarge>
                </ContentContainer>
                <ProductBoxLarge product={products[Math.floor(Math.random() * 57)]} boxTitle="پیشنهاد سبد" />
            </HomePageContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    toggleShoppingMode: (isShopping) => dispatch(setIsShopping(isShopping))
})

export default connect(null, mapDispatchToProps)(HomePage);