import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import TestPost from './components/TestPost';
import {Route, Switch} from 'react-router';
import HomePage from './pages/HomePage';
import SecondPage from './pages/SeconPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path={['/second', '/second/:slug']}
          component={SecondPage}
        />
        <Route exact path="/error" component={() => <div>Error Page</div>} />
      </Switch>
    </div>
  );
}

export default App;
