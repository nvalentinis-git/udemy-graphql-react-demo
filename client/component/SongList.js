import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import { songsQuery } from '../gql/queries';
import { deleteSong } from "../gql/mutations";

class SongList extends Component {
  onDeleteClick(songId) {
    // this.props.mutate is injected by graphql(react-apollo) HOC call
    this.props.mutate({
      variables: {
        id: songId,
      },
    })
      // this.props.data.refetch() is injected by graphql(react-apollo)
      .then(() => { this.props.data.refetch()})
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title}) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>
            {title}
          </Link>
          <a
            className="waves-effect waves-light btn-small right"
            onClick={() => this.onDeleteClick(id)}>
            <i className="material-icons">delete</i>
          </a>
        </li>
      );
    })
  }

  render() {
    if (this.props.data.loading) {
      return <div> Loading... </div>
    }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(deleteSong)(
  graphql(songsQuery)(SongList)
);
