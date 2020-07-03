import React from 'react';
import styled from 'styled-components';

const App = ({data}) => (
    <Wrapper>
        <WrapperWithPadding>
            <Img src={data.url}/>
            <TextWrapper>
                <Title>{data.name}</Title>
                <Text>{data.text}</Text>
            </TextWrapper>
        </WrapperWithPadding>
    </Wrapper>
)

const Wrapper = styled.div`
    width: 500px;
    height: 160px;
    box-shadow: 0 0 8px #DBE0F1;
    margin-top: 24px;
    border-radius: 12px;
`
const WrapperWithPadding = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 112px;
    margin-left: 18px;
`

const Title = styled.div`
    color: #2F2E41;
    font-size: 24px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
`
const Text = styled.div`
    color: #66686F;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    margin-top: 14px;
`
const Img = styled.img`
    width: 112px;
    height: 112px;
`;

export default App;
