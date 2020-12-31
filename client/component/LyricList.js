import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { likeLyric } from '../gql/mutations';

class LyricList extends Component {
  onLike(lyricId, likes) {
    this.props.mutate({
      variables: { id: lyricId },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
           __typename: 'LyricType',
          id: lyricId,
          likes: likes + 1
        }
      }
    })
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes}) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="right" style={ {cursor: 'pointer'}}>
            <i className="material-icons"
               style={ likes > 0 ? { color: 'blue' } : {} }
               onClick={() => this.onLike(id, likes)}
            >
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    })
  }

  render() {
    return(
      <ul className="collection">
        { this.renderLyrics() }
      </ul>
    );
  }
}

export default graphql(likeLyric)(LyricList)
