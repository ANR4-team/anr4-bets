import { Button } from 'primereact/button'
import { PrimeIcons } from 'primereact/api'
import { generatePath, Link } from 'react-router-dom'

import { Routes } from 'modules/routing'
import { TournamentCard } from 'components/tournamentCard'
import { Layout } from 'components/layout'

import s from './Dashboard.module.scss'

export const Dashboard = (): JSX.Element => {
  const tournaments = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    title: `Rofloturik - ${index}`,
  }))

  return (
    <Layout>
      <div>
        <Button label="Create tournament" icon={PrimeIcons.PLUS} />
      </div>

      <div className={s.grid}>
        {tournaments.map(({ id, title }) => (
          <Link key={id} to={generatePath(Routes.tournament, { tournamentId: id })}>
            <TournamentCard title={title} />
          </Link>
        ))}
      </div>
    </Layout>
  )
}
