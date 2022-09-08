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
export const LOAD_TECH_PRODUCTS = gql `
    query {
      category(input: {title: "tech"}) {
        name
        products{
          id
        }
      }
    }
`;
export const LOAD_ALL_PRODUCTS = gql `
    query {
      category(input: {title: "all"}) {
        name
        products{
          id
        }
      }
    }
`;
export const LOAD_CLOTHES_PRODUCTS = gql `
    query {
      category(input: {title: "clothes"}) {
        name
        products{
          id
        }
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

