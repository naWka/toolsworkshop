import React, {useState,useEffect } from 'react';
import styled from 'styled-components';
import Img from '../../assets/img_main.png'



  
const MainInfo = () => {
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
            <WrapperSmall>
             <ImageSmall src={Img} /> 
            <TextWrapperSmall>

                    <TitleSmall>Useful tools
    for your everyday life</TitleSmall>
                    <div style={{marginTop: 16}}>Simple applications are always at your fingertips: from surfing the web and chatting with friends to taking care of your health and your family - we cover truly the necessary needs.</div>

            </TextWrapperSmall>

        </WrapperSmall>
        )
    }
    return (
        <Wrapper>
            <TextWrapper>
                <div style={{position: 'absolute', maxWidth: 498}}>
                    <Title>Useful tools
    for your everyday life</Title>
                    <div style={{marginTop: 22}}>Simple applications are always at your fingertips: from surfing the web and chatting with friends to taking care of your health and your family - we cover truly the necessary needs.</div>
                </div>
            </TextWrapper>
            <Image src={Img} /> 

        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 516px;
    max-width: 1096px;
    background-color: 'red';
    /* background-color: #F3F6FF; */
    border-radius: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 72px;
    padding-right: 72px;
`
const WrapperSmall = styled.div`
    min-width: 320px;
    background-color: 'red';
    /* background-color: #F3F6FF; */
    border-radius: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16;
    padding-right: 16;
    flex-direction: column;
    height: 380px;
`

const TextWrapper = styled.div`
    color: #66686F;
    font-size: 22px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 498px;
    min-width: 300px;
    z-index: 100;
`
const TextWrapperSmall = styled.div`
    color: #66686F;
    font-size: 22px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-width: 300px;
    z-index: 100;
    padding-left: 16px;
    padding-right: 16px;

`
const Title = styled.div`
    color: #2F2E41;
    font-size: 48px;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
`
const TitleSmall = styled.div`
    color: #2F2E41;
    font-size: 25px;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
`

const Image = styled.img`
    width: 561px;
    height: 439px;
`
const ImageSmall = styled.img`
    width: 296px;
    height: 232px;
`
export default MainInfo;
