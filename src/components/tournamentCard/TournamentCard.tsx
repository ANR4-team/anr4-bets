import { FC } from 'react'
import { Card } from 'primereact/card'

interface Props {
  title: string
}

export const TournamentCard: FC<Props> = ({ title }) => {
  return <Card title={title} />
}
