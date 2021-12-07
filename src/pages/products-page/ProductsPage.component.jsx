import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination.component';
import ProductBoxMedium from '../../components/product-box/ProductBoxMedium.component';
import { connect } from 'react-redux';
import { selectProducts } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import {
    Container,
    CategoryList
} from './ProductsPage.styles';
import { setIsShopping } from '../../redux/shop/shop.action';
import { useParams } from 'react-router-dom';
import { handleGeneralFilter, handleSearch } from '../../redux/shop/shop.utils';
import { selectSearchKeyword } from '../../redux/search/search.selectors';

const ProductsPage = ({ items, toggleShoppingMode, searchKey }) => {
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        toggleShoppingMode(true);
    }, []);

    const itemsPerPage = 12;
    const itemsVisited = pageNumber * itemsPerPage;

    let filteredItems = [];
    switch(useParams().filter) {
        case 'newest':
            filteredItems = items;
            break;
        case 'most_popular':
            filteredItems = handleGeneralFilter('محبوب ترین', items);
            break;
        case 'search':
            filteredItems = handleSearch(searchKey, items);
            break;
        default:
            filteredItems = items;
            break;
    }

    const displayProducts = filteredItems
        .slice(itemsVisited, itemsVisited + itemsPerPage)
        .map(item => (
            <ProductBoxMedium key={item.id} product={item} />
        ));
    
    const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

    const changePageHandler = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <Container>
            <CategoryList>
                {displayProducts}
            </CategoryList>
            {(filteredItems.length > 9) ? 
                <Pagination 
                pageCount={pageCount} 
                onPageChange={changePageHandler} />
                : null}
        </Container>
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectProducts,
    searchKey: selectSearchKeyword
});

const mapDispatchToProps = dispatch => ({
    toggleShoppingMode: (isShopping) => dispatch(setIsShopping(isShopping))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);