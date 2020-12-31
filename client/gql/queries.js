import gql from 'graphql-tag';

const songsQuery = gql`
  {
    songs {
      id,
      title
    }
  }
`;

// GQL Query with params, then it is used with GQL variables
const songByIdQuery = gql`
  query SongById($id: ID!) {
    song(id: $id) {
      id,
      title,
      lyrics {
        id,
        content,
        likes
      }
    }
  }
`

export {
  songsQuery,
  songByIdQuery,
}
