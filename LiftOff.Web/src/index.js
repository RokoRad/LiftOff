import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import './global.css';
import './index.css';

const App = () => (
  <BrowserRouter>
    <Route exact strict path="/" component={Login}/>
    <Route exact strict path="/dashboard" component={Dashboard}/>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();