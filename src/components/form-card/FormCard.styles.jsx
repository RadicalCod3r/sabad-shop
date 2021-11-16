import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 900px;
    height: 500px;
    display: flex;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    border: none;
    margin-bottom: 100px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const FormContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`;

export const FormImage = styled.img`
    width: 40%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => (
        props.reverse ?
        '0 10px 10px 0' :
        '10px 0 0 10px'
    )};
`;