import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import SongList from './SongList';
import SongIndex from './SongIndex';
import SongCreate from './SongCreate';

const client = new ApolloClient({})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={SongIndex}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

export default App;
