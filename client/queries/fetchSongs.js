import { gql } from 'react-apollo';

export default gql`
  {
    songs {
      title
      id
    }
  }
`;
