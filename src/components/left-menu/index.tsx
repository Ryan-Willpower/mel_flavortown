import React from "react"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background: #222;
  width: 250px;
  position: fixed;
  color: #eee;
  display: flex;
  flex-flow: column;
  padding: 20px 0;
`

const Icon = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
`

const MenuList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: column;
`

const MenuItem = styled(Link)`
  color: #eee;
  text-decoration: none;
  padding: 20px;
  font-size: 1.1rem;

  :hover {
    background: #eee;
    color: #222;
  }
`

const LeftMenu: React.FC = () => {
  return (
    <Container>
      <Icon>Flavor Town</Icon>
      <MenuList>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/add">Add Data</MenuItem>
      </MenuList>
    </Container>
  )
}

export default LeftMenu
