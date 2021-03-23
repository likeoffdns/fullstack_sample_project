let nextOrderId = 1

export const setOrders = data => ({
  type: 'SET_ORDERS',
  payload: {data}
})

export const addOrder = data => ({
  type: 'ADD_ORDER',
  payload:{
    id:nextOrderId++,
    orderNumber: data.orderNumber,
    customer: data.customer,
    orderDate: data.orderDate,
    shippingDate: data.shippingDate,
    cost: data.cost,
    items: data.items
  }
})


export const deleteOrder = (id) => ({
  type: 'DELETE_ORDER',
  payload: {id}
})

export const updateOrder = (id,data) => ({
  type: 'UPDATE_ORDER',
  payload: {
    data,
    id
  }
})