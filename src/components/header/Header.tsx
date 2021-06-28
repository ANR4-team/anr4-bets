import { FC } from 'react'
import { Button } from 'primereact/button'
import { PrimeIcons } from 'primereact/api'

import s from './Header.module.scss'

interface Props {
  signIn: () => void
  logout: () => void
  authenticated: boolean
}

export const Header: FC<Props> = ({ signIn, logout, authenticated }) => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://avatars.githubusercontent.com/u/86535297?s=200&v=4"
        alt="app-logo"
      />
      <div>
        {authenticated ? (
          <Button label="Logout" onClick={logout} />
        ) : (
          <Button label="Sign In" icon={PrimeIcons.GOOGLE} onClick={signIn} />
        )}
      </div>
    </header>
  )
}
