import { FC } from 'react'

import s from './Layout.module.scss'

interface Props {
  direction?: 'row' | 'column'
}

export const Layout: FC<Props> = ({ children, direction = 'column' }) => {
  return (
    <div style={{ flexDirection: direction }} className={s.layout}>
      {children}
    </div>
  )
}
