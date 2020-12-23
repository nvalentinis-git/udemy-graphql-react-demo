import gql from 'graphql-tag';

const songsQuery = gql`
  {
    songs {
      id,
      title
    }
  }
`;

export {
  songsQuery,
}
