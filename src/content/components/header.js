import React from 'react';
import styled from 'styled-components';
import Support from './Support';
import L from '../../assets/logo.png'

const Header = () => (
    <HeaderWrapper>
        <Logo src={L} alt="Logo" />
        <Support />
    </HeaderWrapper>
)

const HeaderWrapper = styled.div`
    height: 68px;
    padding: 0px 36px 0px 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 112px;
    height: 32px;
`;

export default Header;
