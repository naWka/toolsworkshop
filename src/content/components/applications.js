import React from 'react';
import styled from 'styled-components';

const Applications = () => (
    <Wrapper>
        <Title>Our applications</Title>
    </Wrapper>
)

const Wrapper = styled.div`
    padding: 0px 36px 0px 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
`
const Title = styled.div`
    color: #2F2E41;
    font-size: 32px;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
`

export default Applications;
