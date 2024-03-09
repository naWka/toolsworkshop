import React, {useState,useEffect } from 'react';
import styled from 'styled-components';

import o2 from '../../assets/o2.png';
import Body from '../../assets/body.png';
import prec from '../../assets/prec.png';
import Split from '../../assets/spleet.png';
import App from './app';

const apps = [
    {
        img: Split,
        name: 'Screen Split View',
        text: 'Divide the screen of your device into 2 windows to do several tasks at same time: watch, chat, work, compare, search etc.',
        url: 'https://apps.apple.com/us/app/screen-split-view/id1507299729'
    },
    {
        img: Body,
        name: 'Body Temperature',
        text: 'Temp logbook for all your family: monitor temperature data, taken meds and health condition ',
        url: 'https://apps.apple.com/us/app/body-temperature-tracker/id1508978882'
    },
    {
        img: o2,
        name: 'Blood Oxygen Level',
        text: 'The most important tracker in our life: log your oxygen level, measure heart rate, sync all data Apple Health. Ready report for your doctor.',
        url: 'https://apps.apple.com/us/app/blood-oxygen-app-level-log/id1567177708'
    },


    {
        img: prec,
        name: 'Blood Pressure ',
        text: 'Pocket cardio diary for everyday care of your heart: easy input, pdf report and pulse measurement with device camera.',
        url: 'https://apps.apple.com/us/app/blood-pressure-app-log-diary/id1525183703'
    },
]

const Applications = () => {
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
            <MaimWrapperSmall>
            <Wrapper >
                <Title>Our applications</Title>
                <AppsWrapper style={{justifyContent: 'center'}}>
                    {apps.map(item => <App key={item.name} data={item}/>)}
                </AppsWrapper>
            </Wrapper>
        </MaimWrapperSmall>
        )
    }

    return (
    <MaimWrapper>
        <Wrapper>
            <Title>Our applications</Title>
            <AppsWrapper>
                {apps.map(item => <App key={item.name} data={item}/>)}
            </AppsWrapper>
        </Wrapper>
    </MaimWrapper>
)}

const MaimWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    width: 100%;
`
const MaimWrapperSmall = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
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
