import styled from 'styled-components';

export const FormInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: .5rem 0;
    background-color: #F4F4F4;
    height: 40px;
    width: 300px;
    border-radius: 10px;
    border: none;
`;

export const LogoContainer = styled.div`
    width; 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputPlaceholder = styled.h3`
    font-size: 14px;
    padding: .5rem;
    color: #3B668D;
`;

export const Line = styled.div`
    width: .5px;
    height: 100%;
    background: #ccc;
`;

export const Input = styled.input`
    width: 70%;
    font-size: 14px;
    color: #333;
    margin: 10px;
    outline: none;
    border: none;
    background-color: #f4f4f4;
    font-family: iran_sans, 'Segoe UI', Tahoma, sans-serif;
`;