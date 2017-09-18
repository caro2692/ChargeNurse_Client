import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import reducers from './reducers';

import MatchPage from './components/match_page';
import NurseContainer from './components/nurse_container';
import NursesSingle from './components/nurses_single';
import CardExampleGroups from './components/nurse_card';

// const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore)
const createStoreWithMiddleware = (initialState => createStore(
         reducers,
         initialState,
         compose(
           applyMiddleware(thunk, promise),
         window.devToolsExtension ? window.devToolsExtension() : f => f))
     );

const store = createStoreWithMiddleware();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/nurses/:id' component={NursesSingle}/>
          <Route path="/" component={MatchPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
