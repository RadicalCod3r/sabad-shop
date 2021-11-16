import React from 'react';
import { Seperator, BoxTitle } from './ProductBox.styles';
import ProductBoxContainerLarge from './ProductBoxLarge.styles';
import ProductContentLarge from './product-content/ProductContentLarge.component';


const ProductBoxLarge = ({ product, boxTitle }) => {
    if(boxTitle) {
        return(
            <ProductBoxContainerLarge>
                <BoxTitle>{boxTitle}</BoxTitle>
                <Seperator />
                <ProductContentLarge item={product} />
            </ProductBoxContainerLarge>
        )
    } else {
        return(
            <ProductBoxContainerLarge>
                <ProductContentLarge item={product} />
            </ProductBoxContainerLarge>
        )
    }
}

export default ProductBoxLarge;