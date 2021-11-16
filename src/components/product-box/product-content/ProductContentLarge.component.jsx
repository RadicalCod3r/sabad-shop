import React from 'react';
import {
    ProductContainer,
    ProductContent,
    PriceInfoContainer,
    DiscountSectionContainer
} from './ProductContent.styles';

import {
    TitleText,
    DeletedText,
    PriceText,
    ProductImage
} from './ProductContentLarge.styles';

import AddToCartBtnLarge from '../../buttons/add-to-cart-button/AddToCartBtnLarge.component';

import {PersentageContainerSmall} from '../../persentage-container/PersentageContainer.styles';

const ProductContentLarge = ({ item }) => {
    const { imageUrl, title, discountPersent, priceBeforDiscount, price } = item;
    return(
        <ProductContainer>
            <ProductImage src={imageUrl} />
            <TitleText>{title}</TitleText>
            <ProductContent>
                <AddToCartBtnLarge />
                <PriceInfoContainer>
                    {discountPersent !== 0 ? (
                            <DiscountSectionContainer>
                                <DeletedText>{priceBeforDiscount}</DeletedText>
                                <PersentageContainerSmall>{`${discountPersent}٪`}</PersentageContainerSmall>
                            </DiscountSectionContainer>
                        ) : null
                    }
                    <PriceText>{`${price} تومان`}</PriceText>
                </PriceInfoContainer>
            </ProductContent>
        </ProductContainer>
    );
}
    
export default ProductContentLarge;