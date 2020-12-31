import gql from 'graphql-tag';

const createSong = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      id,
      title
    }
  }
`;

const deleteSong = gql`
  mutation DeleteSong($id: ID){
    deleteSong(id: $id) {
      id, 
      title
    }
  }
`

const addLyricToSong = gql`
  mutation AddLyric($content: String, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
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

const likeLyric = gql`
  mutation LikeLyric ($id: ID) {
    likeLyric(id: $id) {
      id,
      likes
    }
  }
`

export {
  createSong,
  deleteSong,
  addLyricToSong,
  likeLyric
}
