import React from 'react';
import styled from 'styled-components';

const Footer = () => (
    <Wrapper>
        <Text>Copyright © 2020 Tools Workshop</Text>
        <LinksWrapper>
            <TextHover>Terms of service</TextHover>
            <TextHover>Privacy Policy</TextHover>
        </LinksWrapper>
    </Wrapper>
)

const Wrapper = styled.div`
    height: 54px;
    background-color: #F3F6FF;
    padding: 0px 198px 0px 218px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 226px;
`
const Text = styled.div`
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: #A6A4C7;
`
const TextHover = styled.div`
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: #A6A4C7;
    text-decoration: underline;
    &:hover {
        cursor: pointer;
     }
`

export default Footer;
