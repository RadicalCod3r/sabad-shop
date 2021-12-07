import React from 'react';
import { Link } from 'react-router-dom';
import {
    CategoryImage
} from './CategoryItem.styles';
import { useLocation } from 'react-router-dom';

const CategoryItem = ({ item }) => {
    // console.log(useLocation().pathname);
    return(
        <div>
            <Link to={`${useLocation().pathname}/categories/${item.name}`}>
                <CategoryImage src={item.imageUrl}/>
            </Link>
        </div>
    )
}

export default CategoryItem;