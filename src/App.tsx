import { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Routes } from 'modules/routing'
import { Dashboard } from 'pages/dashboard'
import { Tournament } from 'pages/tournament'
import { Header } from 'components/header'

import { googleAuth, getUser, User } from 'api/user'

export const App = (): JSX.Element => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User>({})

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      getUser(token).then(user => {
        setAuthenticated(true)
        setUser({
          id: user.id,
          name: user.name,
          profileImageUrl: user.profileImageUrl,
        })
      })
    }
  }, [])

  const signIn = () => {
    googleAuth().then(({ token, user }) => {
      setAuthenticated(true)
      setUser(user)
      localStorage.setItem('token', token)
    })
  }

  const logout = () => {
    const token = localStorage.getItem('token')
    if (token) {
      localStorage.removeItem('token')
      setAuthenticated(false)
      setUser({})
    }
  }

  return (
    <>
      <Header signIn={signIn} logout={logout} authenticated={authenticated} />
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
