import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage';
import Profile from './components/profile/ProfilePage';
import Mirror from './components/mirror/MirrorPage';
import Modules from './components/modules/ModulesPage';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/mirror" component={Mirror} />
    <Route path="/modules" component={Modules} />
  </Route>
);