import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Inital from './views/Initial';
import Dashboard from './views/Dashboard';
import './global.css';
import './index.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact strict path="/" component={Inital} />
      <Route exact strict path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();