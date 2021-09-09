import gql from 'graphql-tag';

export const COUNTRY = gql`
  query ($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      continent {
        name
        code
        countries {
          code
        }
      }
      languages {
        code
        name
        native
        rtl
      }
    }
  }
`;
