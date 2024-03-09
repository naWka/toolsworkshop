import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import { Title } from './applications';

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;
    width: 100%;
  `
const Wrapper = styled.div`
    display: flex;
    max-width: 1025px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;
    width: 100%;
  `

const Forms = styled.form`

    width: '100%';
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    `

const LeftForms = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 450px;
    width: 450px;
    margin-left: 16px;
`

const InputTitle = styled.div`
    color: #2F2E41;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
`

const RightForm = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin-left: 16px;
`
const Input = styled.input`
    height: 44px;
    border: 1px solid #EBEDF2;
    padding-left: 12px;
    border-radius: 16px;
    background-color: #FDFDFF;
    margin-top: 7px;
`
const TextArea = styled.textarea`
    height: 106px;
    width: 500px;
    border: 1px solid #EBEDF2;
    border-radius: 16px;
    background-color: #FDFDFF;
    margin-top: 7px;
    padding: 14px 12px 14px 12px;
    max-width: 476px;
    
`

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
`
const SubmitBtn = styled.button`
    height: 38px;
    width: 157px;
    background-color: #2957FF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 0px;
`
const Text = styled.div`
    color: #FFF;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
`

const FeedBack = ({ callback }) => {
    const [screenWidth, setWindowWidth] = useState(0)
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

    const [status, setStatus] = useState('');

    function submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setTimeout(() => callback(), 1000);
                setStatus('SUCCESS');
            } else {
                setStatus('ERROR');
            }
        };
        xhr.send(data);
    }


    const isSmall = screenWidth < 995
    return (
        <MainWrapper style={isSmall ? {marginTop: 0} : {}}>


            
            <Wrapper>
                <Title>Support</Title>

                <Forms
                    noValidate={false}
                    onSubmit={submitForm}
                    action="https://formspree.io/f/xjvavlde"
                    method="POST"
                    style={isSmall ? {marginTop: 0, width: 320} : {}}
                >
                    <LeftForms>

                            <InputTitle>Name:</InputTitle>
                            <Input type="name" name="name" placeholder={'Enter your name'}/>


                        <InputTitle   style={isSmall ? {marginTop: 8, width: 320} : {}}>Email:</InputTitle>
                    <Input type="email" name="email" placeholder={'Enter your email'}/>


       
                    </LeftForms>
                    <RightForm>
                        <InputTitle style={isSmall ? {marginTop: 8, width: 320} : {}}>Message:</InputTitle>
                        <TextArea style={isSmall ? { width: 320} : {}} id="message"  name="message" className={'textarea'} placeholder={'Enter your message'}/>
                    </RightForm>
                    <ButtonWrapper>
                    {status === "SUCCESS" ?
                        <p>Thanks!</p> :
                        (<SubmitBtn type={'submit'} >
                            <Text>Submit</Text>
                        </SubmitBtn>)
                    }
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </ButtonWrapper>
                </Forms>
     
            </Wrapper>
        </MainWrapper>
    );

}

export default FeedBack;
