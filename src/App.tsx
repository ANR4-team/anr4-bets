import logo from './logo.svg'

import s from './App.module.scss'

export const App = (): JSX.Element => {
  return (
    <div className={s.app}>
      <header className={s.header}>
        <img src={logo} className={s.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className={s.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}
