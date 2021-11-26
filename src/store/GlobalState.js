import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'
export const DataContext = createContext()
import { getData } from '../../utils/fetchData'

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {} }
  const [state, dispatch] = useReducer(reducers, initialState)

  useEffect(() => {
    const primeirologin = localStorage.getItem('primeirologin')
    if (primeirologin) {
      getData('auth/accessToken').then(res => {
        if (res.err) return localStorage.removeItem('primeirologin')

        dispatch({
          type: 'AUTH',
          payload: {
            token: res.access_token,
            user: res.user
          }
        })
      })
    }
  }, [])

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
