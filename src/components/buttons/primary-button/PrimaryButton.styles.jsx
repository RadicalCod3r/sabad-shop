import { css } from 'styled-components';

const PrimaryButton = css`
    text-decoration: none;
    color: #3B668D;
    border: #3B668D solid 1px;
    border-radius: 10px;
    display: inline;
    cursor: pointer;
    text-align: center;
    overflow: hidden;

    &:hover {
        opacity: 0.8;
    }
`;

export default PrimaryButton;