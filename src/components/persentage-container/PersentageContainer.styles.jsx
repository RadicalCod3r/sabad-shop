import styled, { css } from 'styled-components';

const PersentageContainer = css`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D4E9E2;
    border-radius: 50%;
    color: #3B668D;
    text-align: center;
`;

export const PersentageContainerSmall = styled.span`
    ${PersentageContainer}
    width: 40px;
    height: 40px;
`;

export const PersentageContainerLarge = styled.span`
    ${PersentageContainer}
    width: 80px;
    height: 80px;
`;