import React, { useState } from 'react';
import styled from 'styled-components';

import MainInfo from '../components/mainInfo';
import Applications from '../components/applications';


const Main = () => {
    return (
        <Wrapper>
            <MainInfo />
            <Applications />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
`


export default Main;
