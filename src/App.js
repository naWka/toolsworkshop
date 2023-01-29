import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import styled from 'styled-components';
import Privacy from './content/pages/privacy';
import FeedBack from './content/pages/feedback';
import Tos from './content/pages/tos';
import Main from './content/pages/main';
import Head from './content/components/header';
import Footer from './content/components/footer';

const AppWrapper = styled.div`
    min-width: 300px;
    max-width: 1096px;
    width: 100%;
`
const MainWrapper = styled.div`
  display: flex;
  justify-content: center
`

const App = () => {
  return (
      <Router>
          <MainWrapper>
              <AppWrapper>
                  <Head />
                  <Route exact path='/' component={Main} />
                  <Route path='/main' component={Main} />
                  <Route path='/feedback' component={FeedBack} />
                  <Route path='/tos' component={Tos} />
                  <Route path='/privacy' component={Privacy} />
              </AppWrapper>
          </MainWrapper>
          <Footer/>
      </Router>
  )
}

export default App;