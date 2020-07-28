import React, {useRef} from 'react';
import styled from 'styled-components';

import MainInfo from '../components/mainInfo';
import Applications from '../components/applications';
import Feedback from '../components/feedback'

const Main = (props) => {
    console.log('props', props);
    React.useEffect(() => {
        if (props.location.feedback) {
            console.log('window.scrollTo(0, 0)')
            window.scrollTo(0,document.body.scrollHeight);
        }
    }, [])
    return (
        <Wrapper>
            <MainInfo />
            <Applications />
            <Feedback />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
`


export default Main;
