import React from 'react';
import {HashRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import styled from 'styled-components';
import Privacy from './content/pages/privacy';
import FeedBack from './content/pages/feedback';
import Tos from './content/pages/tos';

const AppWrapper = styled.div`
    min-width: 300px;
`

const App = () => {
  return (
      <Router>
          <AppWrapper>
              <Route exact path='/' component={Privacy} />
              <Route path='/feedback' component={FeedBack} />
              <Route path='/tos' component={Tos} />
              <Route path='/privacy' component={Privacy} />
          </AppWrapper>
      </Router>
  )
}

export default App;