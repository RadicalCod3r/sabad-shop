import styled from 'styled-components';

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    background-color: ${props => props.backgroundColor};
    width: 100%;
    height: 350px;
    justify-content: center;
    align-items: center;
`;

export const BannerContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    text-align: center;
`;

export const BannerTitle = styled.h2`
    font-size: 1.5rem;
    color: #3B668D;
    margin-bottom: 1rem;
`;

export const BannerText = styled.p`
    max-width: 450px;
    font-size: 1rem;
    color: black;
`;

export const BannerImage = styled.img`
    width: 50%;
    height: 350px;
    object-fit: cover;
`;