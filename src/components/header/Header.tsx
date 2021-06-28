import { FC } from 'react'
import { Button } from 'primereact/button'
import { PrimeIcons } from 'primereact/api'

import { User } from 'api/user'

import s from './Header.module.scss'

interface Props {
  login: () => void
  logout: () => void
  user: User | null
}

export const Header: FC<Props> = ({ login, logout, user }) => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://avatars.githubusercontent.com/u/86535297?s=200&v=4"
        alt="app-logo"
      />
      <div>
        {user ? (
          <Button label="Logout" onClick={logout} />
        ) : (
          <Button label="Sign In" icon={PrimeIcons.GOOGLE} onClick={login} />
        )}
      </div>
    </header>
  )
}
