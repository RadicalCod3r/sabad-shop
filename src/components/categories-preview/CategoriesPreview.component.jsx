import React from 'react';
import products from '../../data/products';
import {
    CategoriesPreviewContainer,
    TitleText,
    CategoryItemsContainer
} from './CategoriesPreview.styles';
import CategoryItem from '../category-item/CategoryItem.component';

const CategoriesPreview = ({ items }) => (
    <CategoriesPreviewContainer>
        <TitleText>دسته بندی کالا ها</TitleText>
        <CategoryItemsContainer>
            {items.map((item) => (
                <CategoryItem
                    key={item.id} 
                    item={item} />
            ))}
        </CategoryItemsContainer>
    </CategoriesPreviewContainer>
);

export default CategoriesPreview;