import React from 'react';
import styled from 'styled-components';
import Resume from '../../assets/resume.png';
import Body from '../../assets/body.png';
import Pic from '../../assets/pic.png';
import Split from '../../assets/spleet.png';
import App from './app';

const apps = [
    {
        img: Resume,
        name: 'Resume CV Maker',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium accusantium .',
        url: 'https://apps.apple.com/us/app/resume-cv-maker/id1508445136'
    },
    {
        img: Split,
        name: 'Screen Split View',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium accusantium .',
        url: 'https://apps.apple.com/us/app/screen-split-view/id1507299729'
    },
    {
        img: Body,
        name: 'Body Temperature Tracker',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium accusantium .',
        url: 'https://apps.apple.com/us/app/body-temperature-tracker/id1508978882'
    },
    {
        img: Pic,
        name: 'Pic Retouch ',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium accusantium .',
        url: 'https://apps.apple.com/us/app/pic-retouch/id1511493335'
    },
]

const Applications = () => (
    <MaimWrapper>
        <Wrapper>
            <Title>Our applications</Title>
            <AppsWrapper>
                {apps.map(item => <App key={item.name} data={item}/>)}
            </AppsWrapper>
        </Wrapper>
    </MaimWrapper>
)

const MaimWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    width: 100%;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    width: 100%;
    max-width: 1025px;
`
export const Title = styled.div`
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
    justify-content: space-between;
`

export default Applications;
