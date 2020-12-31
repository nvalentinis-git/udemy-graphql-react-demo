import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { addLyricToSong, likeLyric } from '../gql/mutations';
import { songByIdQuery } from '../gql/queries'

class LyricCreate extends Component {
  constructor(props) {
    super();

    this.state = { content: ''}
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId,
      },
      refetchQueries: [{
        query: songByIdQuery,
        variables: { id: this.props.songId }
      }]
    })
      .then(() => this.setState({ content: ''}))
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={event => { this.setState({ content: event.target.value })}}
        />
      </form>
    );
  }
}

export default graphql(addLyricToSong)(LyricCreate);
