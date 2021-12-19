import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'
import Loading from '../Loading'
import toast from '../Toast'

interface NotifyProps {}

const Notify: React.FC<NotifyProps> = () => {
  const { state, dispatch } = useContext(DataContext)
  const { notify } = state

  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && toast(notify.error, 'error')}
      {notify.success && toast(notify.success, 'success')}
    </>
  )
}

export default Notify
