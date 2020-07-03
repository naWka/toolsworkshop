import React from 'react';
import styled from 'styled-components';
import Resume from '../../assets/resume.png';
import Body from '../../assets/body.png';
import Pic from '../../assets/pic.png';
import Split from '../../assets/spleet.png';
import App from './app';

const apps = [
    {
        url: Resume,
        name: 'Resume CV Maker',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium accusantium .'
    },
    {
        url: Split,
        name: 'Screen Split View',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium accusantium .'
    },
    {
        url: Body,
        name: 'Body Temperature Tracker',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium accusantium .'
    },
    {
        url: Pic,
        name: 'Pic Retouch ',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium accusantium .'
    },
]

const Applications = () => (
    <Wrapper>
        <Title>Our applications</Title>
        <AppsWrapper>
            {apps.map(item => <App key={item.name} data={item}/>)}
        </AppsWrapper>
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    width: 100%;
`
const Title = styled.div`
    color: #2F2E41;
    font-size: 32px;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
`
const AppsWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
`

export default Applications;
