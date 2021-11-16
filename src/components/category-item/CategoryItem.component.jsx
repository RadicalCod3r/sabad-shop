import React from 'react';
import { Link } from 'react-router-dom';
import {
    CategoryImage
} from './CategoryItem.styles';

const CategoryItem = ({ item }) => (
    <div>
        <Link to='/'>
            <CategoryImage src={item.imageUrl} />
        </Link>
    </div>
);

export default CategoryItem;