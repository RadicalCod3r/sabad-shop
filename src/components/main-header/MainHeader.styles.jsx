import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainHeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: #D4E9E2;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-y: hidden;
`;

export const HeaderLogoContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
`;

export const MenuItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 4rem;
    overflow-y: hidden;
`;

export const MenuItem = styled(Link)`
    color: #3B668D;
    font-size: 16px;
    padding: 1.5rem;
    text-decoration: none;
`;