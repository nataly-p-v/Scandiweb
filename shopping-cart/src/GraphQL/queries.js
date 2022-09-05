import { gql } from "@apollo/client";

export const LOAD_CURRENCIES = gql`
    query {
        currencies{
          label,
          symbol
        }
    }
`;
export const LOAD_CATEGORIES = gql `
    query {
        categories{
          name
        }
    }
`;
export const LOAD_PRODUCTS = gql`
    query {
        categories{
            name
            products{
              id
              name
              inStock
              gallery
              description
              category
              attributes{
                name
              }
              prices{
                amount
                currency{
                  symbol
                  label
                }
              }
              brand
            }
        }
    }

`;

