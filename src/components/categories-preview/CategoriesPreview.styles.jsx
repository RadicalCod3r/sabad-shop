import styled from 'styled-components';

export const CategoriesPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleText = styled.h2`
    font-size: 1.5rem;
    color: #3B668D;
    margin: 1.5rem 0;
`;

export const CategoryItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 1.5rem;
`;