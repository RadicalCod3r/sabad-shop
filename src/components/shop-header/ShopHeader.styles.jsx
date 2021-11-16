import styled from 'styled-components';

export const ShopHeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ShopHeaderSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchBar = styled.div`
    width: 400px;
    background-color: #F4F4F4;
    color: #999999;
    border-radius: 10px;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding: .3rem 1rem;
    margin: 0 2rem;
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
    background-color: #F4F4F4;
    border: none;
    font-family: iran_sans, 'Segoe UI', Tahoma, sans-serif;
    font-size: 1rem;
    width: 80%;

    &:focus {
        outline: none;
    }
`

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CartIcon = styled.div`
    color: #3B668D;
    margin: 0 1rem 0 3rem;
`;

export const HeaderLogo = styled.img`
    height: 50px;
    margin: 0px 3rem 0 1rem;
`;

export const SearchIcon = styled.div`
    margin-left: 10px;
`;