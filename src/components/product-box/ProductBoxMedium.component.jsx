import React from 'react';
import ProductBoxContainerMedium from './ProductBoxMedium.styles';
import ProductContentMedium from './product-content/ProductContentMedium.component';


const ProductBoxMedium = ({ product }) => (
    <ProductBoxContainerMedium>
        <ProductContentMedium item={product} />
    </ProductBoxContainerMedium>
)

export default ProductBoxMedium;