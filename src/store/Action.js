export const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
  INCREASE_CART: 'INCREASE_CART',
  DECREASE_CART: 'DECREASE_CART',
  REMOVE_CART: 'REMOVE_CART'
}

export const addToCart = (product, cart) => {
  if (product.inStock === 0) {
    return { type: 'NOTIFY', payload: { error: 'Produto Indisponível' } }
  }
  const check = cart.every(item => {
    return item._id !== product._id
  })

  if (!check)
    return { type: 'NOTIFY', payload: { error: 'Produto já está adicionado' } }

  return { type: 'ADD_CART', payload: [...cart, { ...product, quantity: 1 }] }
}

export const decrease = (data, id) => {
  const newData = [...data]
  newData.forEach(item => {
    if (item._id === id && item.quantity > 0) item.quantity -= 1
  })

  return { type: 'ADD_CART', payload: newData }
}

export const increase = (data, id) => {
  const newData = [...data]
  newData.forEach(item => {
    if (item._id === id) item.quantity += 1
  })
  return { type: 'ADD_CART', payload: newData }
}
export const remove = (data, id) => {
  const newData = data.filter(item => {
    if (item._id !== id) return item
  })
  // return console.log(newData)
  return { type: 'ADD_CART', payload: newData }
}

// export const deleteItem = (data, id, type) => {
//   const newData = data.filter((item) => item._id !== id)
//   return { type, payload: newData }
// }
