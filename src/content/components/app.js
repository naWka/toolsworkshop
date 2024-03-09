import React, {useState,useEffect } from 'react';
import styled from 'styled-components';

const App = ({ data }) => {
    const [width, setWindowWidth] = useState(0)
    useEffect(() => { 
 
      updateDimensions();
 
      window.addEventListener('resize', updateDimensions);
      return () => 
        window.removeEventListener('resize',updateDimensions);
    }, [])
    
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }

    if (width < 995) {
        return (
            <WrapperSmall onClick={() => {
                window.location.href = data.url;
            }}>
                <WrapperWithPaddingSmall>
                <Title style={{marginTop: 8 }}>{data.name}</Title>
                    <Img src={data.img} style={{ width: 72, height: 72, marginTop: 8 }} />
              
                        <Text style={{width: 250}}>{data.text}</Text>
                </WrapperWithPaddingSmall>
            </WrapperSmall>
        )
    }

    return (
    <Wrapper onClick={() => {
        window.location.href = data.url;
    }}>
        <WrapperWithPadding>
            <Img src={data.img}/>
            <TextWrapper>
                <Title>{data.name}</Title>
                <Text>{data.text}</Text>
            </TextWrapper>
        </WrapperWithPadding>
    </Wrapper>
)}

const Wrapper = styled.div`
    width: 500px;
    height: 160px;
    box-shadow: 0 0 8px #DBE0F1;
    margin-top: 24px;
    border-radius: 12px;
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 8px #acafbb;
     }
`
const WrapperSmall = styled.div`
    width: 320px;
    height: 210px;
    box-shadow: 0 0 8px #DBE0F1;
    margin-top: 24px;
    border-radius: 12px;
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 8px #acafbb;
     }
`
const WrapperWithPadding = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
`
const WrapperWithPaddingSmall = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 112px;
    margin-left: 18px;
    max-width: 300px;
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
