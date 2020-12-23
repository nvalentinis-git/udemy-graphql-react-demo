import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

import { createSong } from '../gql/mutations';
import { songsQuery } from '../gql/queries';

class SongCreate extends Component {
  constructor() {
    super();

    this.state = { title: '' }
  }

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onSubmit(event) {
    console.log('form sumbit')
    event.preventDefault();

    // this.props.mutate is injected by graphql(react-apollo) HOC call
    this.props.mutate({
      variables: {
        title: this.state.title,
        refetchQueries: [{ songsQuery }]
      }
    })
      .then(() => {
        hashHistory.push('/');
      })
      .catch((error) => {
        console.error('Error creating a new Song', error)
      })
  }
  render() {
    return (
      <div>
        <Link to="/" >Back</Link>
        <h3>Create New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title</label>
          <input
            value={this.state.title}
            onChange={(event) => this.onChangeTitle(event)}
          />
          <button />
        </form>
      </div>
    );
  }

}

export default graphql(createSong)(SongCreate);
