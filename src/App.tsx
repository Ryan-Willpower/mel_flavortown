import styled from "@emotion/styled"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import LeftMenu from "./components/left-menu"
import HomePage from "./pages/index"
import AddItemPage from "./pages/add"

const AppContainer = styled.div`
  // using menu width
  margin-left: 250px;
`

const App: React.FC = () => {
  return (
    <Router>
      <LeftMenu />

      <AppContainer>
        <Switch>
          <Route path="/add">
            <AddItemPage />
          </Route>

          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  )
}

export default App
