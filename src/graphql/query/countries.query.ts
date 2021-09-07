import gql from 'graphql-tag';

export const COUNTRIES = gql`
  query {
    countries {
      code
      name
      capital
      languages {
        code
      }
      emojiU
    }
  }
`;
