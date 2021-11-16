import React from 'react';
import categories from '../../data/categories';
import {
    CategoriesPreviewContainer,
    TitleText,
    CategoryItemsContainer
} from './CategoriesPreview.styles';
import CategoryItem from '../category-item/CategoryItem.component';

const CategoriesPreview = () => (
    <CategoriesPreviewContainer>
        <TitleText>دسته بندی کالا ها</TitleText>
        <CategoryItemsContainer>
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </CategoryItemsContainer>
    </CategoriesPreviewContainer>
);

export default CategoriesPreview;