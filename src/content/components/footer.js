import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Footer = () => (
    <Wrapper>
        <TextsWrapper style={{ width: 1025}}>
            <Text>Copyright © 2023 Tools Workshop</Text>
            <LinksWrapper>
                <Link to={{pathname: '/tos'}} params={{ feedback: true }}>
                    <TextHover>Terms of service</TextHover>
                </Link>
                <Link to={{pathname: '/privacy'}} params={{ feedback: true }}>
                    <TextHover>Privacy Policy</TextHover>
                </Link>
            </LinksWrapper>
        </TextsWrapper>
    </Wrapper>
)

const Wrapper = styled.div`
    height: 54px;
    background-color: #F3F6FF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 36px;
`
const TextsWrapper = styled.div`
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1025px;
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
