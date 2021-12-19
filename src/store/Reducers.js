import { ACTIONS } from './Action'

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload
      }
    case ACTIONS.AUTH:
      return {
        ...state,
        auth: action.payload
      }
    case ACTIONS.ADD_CART:
      return {
        ...state,
        cart: action.payload
      }
    case ACTIONS.INCREASE_CART:
      return {
        ...state,
        cart: action.payload
      }
    case ACTIONS.DECREASE_CART:
      return {
        ...state,
        cart: action.payload
      }
    case ACTIONS.REMOVE_CART:
      return {
        ...state,
        cart: action.payload
      }

    default:
      return state
  }
}

export default reducers;
