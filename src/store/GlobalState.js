import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'
export const DataContext = createContext()
import { getData } from '../../utils/fetchData'

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {}, cart: []}
  const [state, dispatch] = useReducer(reducers, initialState)
  const { cart } = state

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

  useEffect(() => {
    const __next__cart__if = JSON.parse(
      localStorage.getItem('__next__cart__if')
    )

    if(__next__cart__if){
      dispatch({ type: 'ADD_CART', payload: __next__cart__if})
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('__next__cart__if', JSON.stringify(cart))
  }, [cart]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
