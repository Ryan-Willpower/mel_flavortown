import React from "react"
import styled from "@emotion/styled"

import Toggle from "../../components/toggle-switch"

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  h1 {
    margin: 0;
  }
`

const Index: React.FC = () => {
  return (
    <div>
      <TitleSection>
        <h1>Products</h1>
        <Toggle />
      </TitleSection>
    </div>
  )
}

export default Index
