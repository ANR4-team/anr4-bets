import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Routes } from 'modules/routing'
import { Dashboard } from 'pages/dashboard'
import { Tournament } from 'pages/tournament'

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.dashboard}>
          <Dashboard />
        </Route>
        <Route path={Routes.tournament}>
          <Tournament />
        </Route>

        <Redirect to={Routes.dashboard} />
      </Switch>
    </BrowserRouter>
  )
}
