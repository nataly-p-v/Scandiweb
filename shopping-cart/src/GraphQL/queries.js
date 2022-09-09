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
export const LOAD_PRODUCTS = gql `
query LOAD_PRODUCTS ($category: String!){
category(input: { title: $category }) {
        name
        products{
            id
            name
            inStock
            gallery
            description
            category
           attributes{
             id
             name
             type
             items {
              displayValue
             }

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

export const LOAD_PRODUCT = gql`
query product($id : String!) {
         product(id: $id){
            id
            name
            inStock
            gallery
            description
            category
           attributes{
             id
             name
             type
             items {
              displayValue
             }

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
      `;

