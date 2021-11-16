import styled from 'styled-components';

export const SignUpContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #D4E9E2;
`;

export const SignUpFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 2rem;
`;

export const ConditionsCheckBox = styled.input.attrs({type: 'checkbox', checked: 'checked'})`
    width: 20px;
    height: 20px;
    margin-left: 5px;
    cursor: pointer;
    color: #3B668D;
`;