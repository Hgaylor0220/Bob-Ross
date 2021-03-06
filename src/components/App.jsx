import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ArtCollection from './ArtCollection';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/art' component={ArtCollection} />
      </Switch>
    </div>
  );
}

export default App;