import gql from 'graphql-tag';

export const CONTINENTS = gql`
  query {
    continents {
      name
      code
      countries {
        code
      }
    }
  }
`;
