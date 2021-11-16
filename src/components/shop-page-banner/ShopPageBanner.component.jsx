import React from 'react';
import {
    BannerContainer,
    BannerTitle,
    BannerImage,
    BannerText,
    BannerContent
} from './ShopPageBanner.styles';

const ShopPageBanner = ({ reverse, backgroundColor, imageUrl, title, textContent }) => (
    <BannerContainer reverse={reverse} backgroundColor={backgroundColor}>
        <BannerContent>
            <BannerTitle>{title}</BannerTitle>
            <BannerText>{textContent}</BannerText>
        </BannerContent>
        <BannerImage src={imageUrl} />
    </BannerContainer>
);

export default ShopPageBanner;