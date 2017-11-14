import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/post_index';

//no app.js file necessary because we are using different routes

//go to reduxbog.herokuapp.com for routes for blog api (117)
//postman is an optional install (117)
//npm install --save react-router-dom@4.0.0
//npm install --save axios redux-promise
//npm install --save lodash


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              {/*we need a div to hold the routes*/}
              {/*Anything outside of the two route paths will show across all paths*/}
              <Route path="/" component={PostsIndex} />
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));