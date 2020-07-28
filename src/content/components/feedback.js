import React, {useState} from "react";
import styled from 'styled-components'
import { Title } from './applications';
import Submit from './submit'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;
    width: 100%;
  `

const Forms = styled.form`
    width: 100%;
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    `

const FormWrapper = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    `
const LeftForms = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    margin-left: 25px;
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
    
`

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    padding-right: 16px;
`

const FeedBack = ({callback}) => {
    const [status, setStatus] = useState('');

    function submitForm(ev) {
        console.log('submitForm')
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

    return (
        <Wrapper>
            <Title>Support</Title>
            <Forms
                onSubmit={submitForm}
                action="https://formspree.io/xjvavlde"
                method="POST"
            >
                <LeftForms>
                    <FormWrapper>
                        <InputTitle>Your name:</InputTitle>
                        <Input type="name" name="name" placeholder={'Enter your name'}/>
                    </FormWrapper>
                    <FormWrapper style={{marginTop: 18}}>
                        <InputTitle>Your email:</InputTitle>
                        <Input type="email" name="email" placeholder={'Enter your email'}/>
                    </FormWrapper>
                </LeftForms>
                <RightForm>
                    <InputTitle>Message:</InputTitle>
                    <TextArea type="text" name="message" className={'textarea'} placeholder={'Enter your message'}/>
                </RightForm>
            </Forms>
            <ButtonWrapper>
                {status === "SUCCESS" ?
                    <p>Thanks!</p> :
                    <Submit/>
                }
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </ButtonWrapper>
        </Wrapper>
    );

}

export default FeedBack;
