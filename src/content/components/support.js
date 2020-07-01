import React from 'react';
import styled from 'styled-components';

const Support = () => (
    <SupportBtn>
        <Text>Support</Text>
    </SupportBtn>
)

const SupportBtn = styled.div`
    height: 32px;
    width: 129px;
    background-color: #2957FF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.div`
    color: #FFF;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
`
export default Support;
