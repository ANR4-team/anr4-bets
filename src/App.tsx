import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Routes } from 'modules/routing'
import { Dashboard } from 'pages/dashboard'
import { Tournament } from 'pages/tournament'
import { Header } from 'components/header'

import { useAuth } from 'hooks'

export const App = (): JSX.Element => {
  const [user, { login, logout }] = useAuth()

  return (
    <>
      <Header login={login} logout={logout} user={user} />
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
    </>
  )
}
