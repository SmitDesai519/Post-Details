import React from 'react';
import './App.scss';
import { Route, Switch,withRouter } from 'react-router-dom'
import Posts from './Container/Posts/Posts';
import PostDetails from './Container/Comments/Comments'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Posts} />
        <Route path='/post/:postId' exact component={PostDetails} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
