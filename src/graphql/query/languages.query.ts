import gql from 'graphql-tag';

export const LANGUAGES = gql`
  query {
    languages {
      code
      name
      native
      rtl
    }
  }
`;
