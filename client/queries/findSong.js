import { gql } from 'react-apollo';

export default gql`
  query findSong($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;
