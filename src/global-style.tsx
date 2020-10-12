import React from "react"
import { Global, css } from "@emotion/core"

const style = css`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    font-size: 16px;
  }
`

const GlobalStyle: React.FC = () => {
  return <Global styles={style} />
}

export default GlobalStyle
