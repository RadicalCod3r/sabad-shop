import React from 'react';
import styled from 'styled-components';
import spinnerGif from '../../utils/spinner1.gif';

const SpinnerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Spinner = () => (
    <SpinnerContainer>
        <img src={spinnerGif} />
    </SpinnerContainer>
);

export default Spinner;