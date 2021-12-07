import React, {useState, useEffect} from 'react';
import ProductBoxMedium from '../product-box/ProductBoxMedium.component';
import {
    Container,
    CategoryList
} from './CategoryItemsOverview.styles';
import Pagination from '../Pagination/Pagination.component';

const CategoryItemsOverview = ({ items }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 9;
    const itemsVisited = pageNumber * itemsPerPage;

    const displayProducts = items
        .slice(itemsVisited, itemsVisited + itemsPerPage)
        .map(item => (
            <ProductBoxMedium key={item.id} product={item} />
        ));
    
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const changePageHandler = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <Container>
            <CategoryList>
                {displayProducts}
            </CategoryList>
            {(items.length > 9) ? 
                <Pagination 
                pageCount={pageCount} 
                onPageChange={changePageHandler} />
                : null}
        </Container>
    )
}

export default CategoryItemsOverview;