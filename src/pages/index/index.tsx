import React from "react"
import styled from "@emotion/styled"
import { useQuery } from "@apollo/client"

import { GET_ALL_PRODUCT } from "../../queries"
import { ProductResponse } from "../../types/queries"

import Toggle from "../../components/toggle-switch"

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  margin-bottom: 30px;

  h1 {
    margin: 0;
  }
`

const ProductsContainer = styled.div`
  margin: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;

  > * {
    box-sizing: border-box;
  }
`

const ProductItem = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 20px;
`

const ProductTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  > h2 {
    margin: 0;
  }
`

const SKUInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const Index: React.FC = () => {
  const [isTable, toggleTable] = React.useState(false)
  const { data, loading, error } = useQuery<ProductResponse>(GET_ALL_PRODUCT)

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <TitleSection>
        <h1>Products</h1>
        <Toggle />
      </TitleSection>
      <ProductsContainer>
        {data?.product.map(product =>
          product.skus.map(unit => {
            const skuCode = unit.product_variant_option_combinations
              .map(
                item => item.product_variant_option.product_variant_options_name
              )
              .join(" ")

            return (
              <ProductItem key={`${product.product_name}_${skuCode}`}>
                <ProductTitleSection>
                  <h2>{product.product_name}</h2>x
                </ProductTitleSection>
                <SKUInfo>
                  <div>{skuCode}</div>
                  <div>Amount: {unit.amount}</div>
                  <div>Price: {unit.price}</div>
                </SKUInfo>
              </ProductItem>
            )
          })
        )}
      </ProductsContainer>
    </div>
  )
}

export default Index
