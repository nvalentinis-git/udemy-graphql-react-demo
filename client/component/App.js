import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import SongList from './SongList';
import SongIndex from './SongIndex';
import SongCreate from './SongCreate';
import SongDetail from './SongDetail';

const client = new ApolloClient({
  dataIdFromObject: o => o.id   // indicate to Apollo how to identify each piece of data
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={SongIndex}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

export default App;
