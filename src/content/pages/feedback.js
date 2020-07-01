import React, {useState} from "react";
import styled from 'styled-components'
import css from '../../App.css'

const ModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  `
const ModalContent = styled.div`
    min-width: 300px;
    max-width: 800px;
    width: 90%;
    background-color: #fff;
    position: relative;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 48px 32px;
    `

const Input = styled.input`
    height: 36px;
    margin-top: 6px;
    margin-bottom: 12px;
    border: 1px solid #dadada;
    padding-left: 12px;
`
const TextArea = styled.textarea`
    height: 72px;
    padding-top: 6px;
    margin-top: 6px;
    margin-bottom: 12px;
    border: 1px solid #dadada;
    padding-left: 12px;
    max-width: 800px;
`

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
        <ModalWrapper>
            <ModalContent>
                <div className={'close'} onClick={callback}/>
                <Form
                    onSubmit={submitForm}
                    action="https://formspree.io/xjvavlde"
                    method="POST"
                >
                    <label>Name:</label>
                    <Input type="name" name="name" placeholder={'Enter your name'}/>
                    <label>Email:</label>
                    <Input type="email" name="email" placeholder={'Enter your email'}/>
                    <label>Message:</label>
                    <TextArea type="text" name="message" className={'textarea'} placeholder={'Enter your message'}/>
                    <ButtonWrapper>
                        {status === "SUCCESS" ?
                            <p>Thanks!</p> :
                            <button className={'Button'}>Send Message</button>
                        }
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </ButtonWrapper>
                </Form>
            </ModalContent>
        </ModalWrapper>
    );

}

export default FeedBack;