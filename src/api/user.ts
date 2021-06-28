import axios, { AxiosResponse } from 'axios'

import { auth, provider } from 'modules/auth'

export interface User {
  id?: string | null
  name?: string | null
  profileImageUrl?: string | null
}

const signIn = (user: User): Promise<string> => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/login`, user)
    .then((response: AxiosResponse<{ token: string }>) => response.data.token)
}

export const googleAuth = (): Promise<{ token: string; user: User }> => {
  return auth.signInWithPopup(provider).then(async result => {
    const user = {
      id: result.user?.uid,
      name: result.user?.displayName,
      profileImageUrl: result.user?.photoURL,
    }

    const token = await signIn(user).then(token => token)

    return { token, user }
  })
}

export const getUser = (token: string): Promise<User> => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response: AxiosResponse<User>) => response.data)
}
