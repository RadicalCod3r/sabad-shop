import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    padding: 1rem 0;
    overflow: hidden;
`;

export const ShowcaseTitre = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem;
`;

export const TitleText = styled.h2`
    font-size: 1.5rem;
    color: #3B668D;
`;

export const Thumbnail = styled.div`
    width: 300px;
    margin: 10px;
    transform: scale(95%);
    transition: all .3s;

    &:hover {
        transform: scale(1);
    }
`;