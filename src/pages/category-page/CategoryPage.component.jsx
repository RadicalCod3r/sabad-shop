import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setIsShopping } from '../../redux/shop/shop.action';
import categories from '../../data/categories';
import {
    CategoryContainer,
    FirstSection,
    SecondSection,
    TilteText,
    CategoryCount
} from './CategoryPage.styles';
import CategoryItemsOverview from '../../components/category-items-overview/CategoryItemsOverview.component';
import InfoBoxBlue from '../../components/info-box/InfoBoxBlue.styles';
import FiltersBox from '../../components/filters-box/FiltersBox.component';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectFilters } from '../../redux/shop/shop.selectors';
import { handleBrandFilter, handleGeneralFilter, handlePriceRangeFilter } from '../../redux/shop/shop.utils';

const CategoryPage = ({ toggleShoppingMode, filters }) => {
    useEffect(() => {
        toggleShoppingMode(true);
    });
    
    const category = categories[useParams().categoriesId];
    const items = category.items;
    console.log(items);

    const { general, brandItems, fromPrice, toPrice } = filters;

    let filtered = [];
    filtered = handleGeneralFilter(general, items);
    filtered = handleBrandFilter(brandItems, filtered);
    filtered = handlePriceRangeFilter(parseInt(fromPrice), parseInt(toPrice), filtered);

    console.log(filtered);
    return(
        <CategoryContainer>
            <FirstSection>
                <CategoryItemsOverview items={filtered} />
            </FirstSection>
            <SecondSection>
                <InfoBoxBlue>
                    <TilteText>{category.titleFarsi}</TilteText>
                    <CategoryCount>{items.length}</CategoryCount>
                </InfoBoxBlue>
                <FiltersBox items={items} />
            </SecondSection>
        </CategoryContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleShoppingMode: (isShopping) => dispatch(setIsShopping(isShopping))
});

const mapStateToProps = createStructuredSelector({
    filters: selectFilters
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);