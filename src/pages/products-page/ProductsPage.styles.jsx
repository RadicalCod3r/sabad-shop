import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f4;
    padding: 10px;
`;

export const CategoryList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;