import { FC } from 'react'

interface Props {
  leaders: Array<{ name: string; points: number }>
  className?: string
}

export const Leaderboard: FC<Props> = ({ leaders, className }) => {
  return (
    <div className={className}>
      <h2>Leaderboard</h2>

      {leaders.map(({ name, points }) => (
        <div key={name}>
          <span>{name}</span>
          <span>{points}</span>
        </div>
      ))}
    </div>
  )
}
