import React from 'react';
import ProductBoxContainerSmall from './ProductBoxSmall.styles';
import ProductContentSmall from './product-content/ProductContentSmall.component';


const ProductBoxSmall = ({ product }) => (
    <ProductBoxContainerSmall>
        <ProductContentSmall item={product} />
    </ProductBoxContainerSmall>
)

export default ProductBoxSmall;