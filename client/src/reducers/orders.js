const orders = (state = [], action) => {
    switch (action.type) {
      case 'SET_ORDERS':
        return action.payload.data
      case 'ADD_ORDER':
        return [
          ...state,
          action.payload
        ];
        case 'DELETE_ORDER':
         return state.filter(order => order.id !== action.payload.id);
        case 'UPDATE_ORDER':
          return state.map(order =>
            (order.id === action.payload.id)
              ? Object.assign({}, order, action.payload.data)
              : order
          );
        default:
            return state;
    } 
}
export default orders;