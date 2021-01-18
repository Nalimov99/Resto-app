import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import ErrorBoundary from './components/error-boundry/errorBoundry'
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./store"
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context/resto-service-context';


import './index.scss'
import { Provider } from 'react-redux';

const restoService = new RestoService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <RestoServiceContext.Provider value={restoService}>
          <Router>
              <App/>
          </Router>
        </RestoServiceContext.Provider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
