import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Support from './support';
import L from '../../assets/logo.png'

const Header = () => (
    <HeaderWrapper>
        <Link to={{ pathname: '/', feedback: false }} style={{textDecoration: 'none'}}>
            <Logo src={L} alt="Logo" />
        </Link>
        <Link to={{ pathname: '/', feedback: true}} style={{textDecoration: 'none'}}>
            <Support />
        </Link>
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
