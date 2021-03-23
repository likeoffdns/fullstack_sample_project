const items = (state = [], action) => {
    switch (action.type) {
      case 'SET_ITEMS':
        return action.payload.data
      case 'ADD_ITEM':
        return [
          ...state,
          action.payload
        ];
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.payload.id);
        case 'UPDATE_ITEM':
            return state.map(item =>
                (item.id === action.payload.id)
                  ? Object.assign({}, item, action.payload.data )
                  : item
              );

        default:
            return state;
    }
    
}
export default items;
