import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HomePageBackground = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 10px;
    z-index: -1;
    object-fit: cover;
`;

export const ContentContainer = styled.div`
    width: 20%;
    margin-right: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -100px;
`;

export const TextContent = styled.h1`
    font-size: 2rem;
    margin: 2rem 0;
`;

export const HighlightText = styled.p`
    color: #3B668D
`;

export const CustomLink = styled(Link)`
    font-size: 1.5rem;
    text-decoration: none;
    color: #3B668D;
    padding: 1rem;
`;