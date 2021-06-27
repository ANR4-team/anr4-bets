import { TabView, TabPanel } from 'primereact/tabview'

import { Layout } from 'components/layout'
import { Leaderboard } from 'components/leaderboard'

import s from './Tournament.module.scss'

export const Tournament = (): JSX.Element => {
  const leaderboard = Array.from({ length: 100 }, (_, index) => ({
    name: 'cheliks-' + index,
    points: index * 10,
  }))

  return (
    <Layout direction="row">
      <div className={s.content}>
        <h2>Rofloturik</h2>

        <TabView>
          <TabPanel header="stage I">Content I</TabPanel>
          <TabPanel header="stage II">Content II</TabPanel>
          <TabPanel header="stage III">Content III</TabPanel>
        </TabView>
      </div>

      <Leaderboard className={s.leaderboard} leaders={leaderboard} />
    </Layout>
  )
}
