import { gql } from "@apollo/client"

export const GET_ALL_PRODUCT = gql`
  {
    product {
      product_id
      product_name
      skus {
        amount
        price
        product_variant_option_combinations {
          product_variant_option {
            product_variant_options_name
          }
        }
      }
    }
  }
`
