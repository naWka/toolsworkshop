import React from 'react';
import styled from 'styled-components';

const Submit = () => (
    <SubmitBtn>
        <Text>Submit</Text>
    </SubmitBtn>
)

const SubmitBtn = styled.div`
    height: 38px;
    width: 157px;
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
export default Submit;
