import React from 'react';
import SecondaryButtonMedium from '../buttons/secondary-button/SecondaryButtonMedium.styles';
import { Link } from 'react-router-dom';
import {
    ShowcaseContainer,
    ShowcaseTitre,
    TitleText,
    Thumbnail
} from './Showcase.styles';

import ProductSlider from '../product-slider/ProductSlider.component';
import ProductBoxMedium from '../product-box/ProductBoxMedium.component';

const Showcase = ({ id, items, title, url, backgroundColor }) => (
    <ShowcaseContainer backgroundColor={backgroundColor}>
        <ShowcaseTitre>
            <TitleText>{title}</TitleText>
            <SecondaryButtonMedium>
                <Link to={url} style={{textDecoration: 'none', color: '#3B668D'}}>
                    مشاهده همه
                </Link>
            </SecondaryButtonMedium>
        </ShowcaseTitre>
        <ProductSlider id={id} items={items}>
            {items.map((item) => (
                <Thumbnail>
                    <ProductBoxMedium key={item.id} product={item} />
                </Thumbnail>
            ))}
        </ProductSlider>
    </ShowcaseContainer>
);

export default Showcase;