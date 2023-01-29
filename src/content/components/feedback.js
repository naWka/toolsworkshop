import React, {useState} from "react";
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
    width: 100%;
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
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
    max-width: 450px;
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

const FeedBack = ({callback}) => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = event => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };

    function submitForm(ev) {
        ev.preventDefault();
        console.log('submitForm')
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            console.log('xhr.status', xhr.status)
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
        <MainWrapper>


            
            <Wrapper>
                <Title>Support</Title>

                <Forms
                    noValidate={false}
                    onSubmit={submitForm}
                    action="https://formspree.io/xjvavlde"
                    method="POST"
                >
                    <LeftForms>
                        <FormWrapper>
                            <InputTitle>Your name:</InputTitle>
                            <Input type="name"     name="name"
          value={formData.name}
          onChange={handleChange}  placeholder={'Enter your name'}/>
                        </FormWrapper>
                        <FormWrapper style={{marginTop: 18}}>
                            <InputTitle>Your email:</InputTitle>
                            <Input type="email"           name="email"
          value={formData.email}
          onChange={handleChange} placeholder={'Enter your email'}/>
                        </FormWrapper>
                    </LeftForms>
                    <RightForm>
                        <InputTitle>Message:</InputTitle>
                        <TextArea value={formData.message} name="message"
          onChange={handleChange} className={'textarea'} placeholder={'Enter your message'}/>
                    </RightForm>
                    <ButtonWrapper>
                    {status === "SUCCESS" ?
                        <p>Thanks!</p> :
                        (<SubmitBtn type={'submit'} >
                            <Text>Submit</Text>
                        </SubmitBtn>)
                        // <input type="submit" value="Submit" />
                    }
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </ButtonWrapper>
                </Forms>
     
            </Wrapper>
        </MainWrapper>
    );

}

export default FeedBack;
