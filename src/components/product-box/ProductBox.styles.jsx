import styled, { css } from 'styled-components';

const ProductBoxContainer = css`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    text-align: center;
`;

export const BoxTitle = styled.h2`
    color: #3B668D;
    font-size: 20px;
`;

export const Seperator = styled.hr`
    color: #ccc;
    margin: 10px 0;
`;

export default ProductBoxContainer;