import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Footer = () => (
    <Wrapper>
        <TextsWrapper style={{ width: 1025}}>
            <Text>Copyright © 2024 Tools Workshop</Text>
            <LinksWrapper>
                <Link to={{pathname: '/tos'}} params={{ feedback: true }}>
                    <TextHover>Terms of service</TextHover>
                </Link>
                <Link to={{pathname: '/privacy'}} params={{ feedback: true }}>
                    <TextHover>Privacy Policy</TextHover>
                </Link>
            </LinksWrapper>
        </TextsWrapper>
        <div style={{ padding: '20px', width: '100%', maxWidth: '1025px' }}>
  <Text>Индивидуальный предприниматель Шестаков Артем Олегович</Text>
  <Text>ИНН: 421413959394</Text>
  <Text>ОГРНИП: 321547600007953</Text>
</div>
    </Wrapper>
)

const Wrapper = styled.div`
    min-height: 54px;
    background-color: #F3F6FF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 36px;
    flex-direction: column
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
