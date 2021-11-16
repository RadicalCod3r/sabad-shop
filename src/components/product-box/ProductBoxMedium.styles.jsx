import styled from 'styled-components';
import ProductBoxContainer from './ProductBox.styles';

const ProductBoxContainerMedium = styled.div`
    ${ProductBoxContainer}
    margin: 1rem;
    padding: 2rem;
    width: 300px;
    height: 400px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export default ProductBoxContainerMedium;