import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #D4E9E2;
`;

export const SignInFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 2rem;
`;

export const FormTitle = styled.h2`
    font-size: 1.5rem;
    color: #3B668D;
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

export const Hint = styled.div` 
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
    color: #333;
    font-size: 12px;
`;