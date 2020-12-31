import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import { songByIdQuery } from '../gql/queries'

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div> Loading.. </div>
    }

    return (
      <div>
        <Link to="/" >Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics}/>
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

/**
 * The component hierarchy is " ReactRouter --> graphql --> SongDetail "
 * "graphql" is the first component in receive the "id" provided by React Router
 * obtained from the URL Path param
 */
export default graphql(songByIdQuery, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
