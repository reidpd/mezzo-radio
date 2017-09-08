import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Route } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/component_Login';
import User from './components/component_User';

import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/" component={App} />
        <div>
          <Route path="/login" component={Login} />
          <Route path="/user/:accessToken/:refreshToken" component={User} />
          <Route path="/error/:errorMsg" component={Error} />
        </div>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
