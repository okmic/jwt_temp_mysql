import React from "react"

type _sort = {  
  auth: boolean
  setAuth: (auth: boolean) => void
  token: string | null
  setToken: (token: string | null) => void
  userId: number | null
  setUserId: (id: number) => void
}

type DataContextType = {
  data: _sort
  children: React.ReactNode
}

export const AuthContext = React.createContext({} as _sort)

export const AuthContextProvider = ({data, children}: DataContextType) => <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
