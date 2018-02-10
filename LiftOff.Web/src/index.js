import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import { Provider } from 'react-redux';
import store from './store';
import './global.css';
import './style.css';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact strict path="/" component={Login} />
        <Route exact strict path="/register" component={Register} />
        <Route exact strict path="/dashboard" component={Dashboard} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
