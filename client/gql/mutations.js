import gql from 'graphql-tag';

const createSong = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

export {
  createSong,
}
