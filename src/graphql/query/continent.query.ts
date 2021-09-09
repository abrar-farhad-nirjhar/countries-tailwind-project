import gql from 'graphql-tag';

export const CONTINENT = gql`
  query ($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
        capital
      }
    }
  }
`;
