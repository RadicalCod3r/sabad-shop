import styled from 'styled-components';

export const FiltersContainer = styled.div`
    width: 350px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    text-align: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 1rem .5rem;
`;

export const FiltersTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: .5rem 0;
`;

export const TitleText = styled.h2`
    font-size: 1.2rem;
    color: #333;
`;

export const GeneralItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
`;

export const BrandItems = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BrandItem = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 2rem;
    align-items: center;
`

export const CostFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: right;
    text-align: right;
    margin-bottom: 1rem;
`;

export const FilterText = styled.h3`
    font-size: 1rem;
    color: #333;
    text-align: right;
`;

export const FilterTitre = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: .5rem 0;
`;

export const FilterCircle = styled.div`
    width: 10px;
    height: 10px;
    background-color: #3B668D;
    border-radius: 50%;
    border: none;
    margin: 0 1rem 0 .5rem;
`;