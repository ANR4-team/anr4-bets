import { useState, useEffect } from 'react'

import { googleAuth, getUser, User } from 'api/user'

export const useAuth = (): [User | null, { login: () => void; logout: () => void }] => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      getUser(token).then(user => {
        setUser({
          id: user.id,
          name: user.name,
          profileImageUrl: user.profileImageUrl,
        })
      })
    }
  }, [])

  const login = () => {
    googleAuth().then(({ token, user }) => {
      setUser(user)
      localStorage.setItem('token', token)
    })
  }

  const logout = () => {
    const token = localStorage.getItem('token')
    if (token) {
      setUser(null)
      localStorage.removeItem('token')
    }
  }

  return [user, { login, logout }]
}
