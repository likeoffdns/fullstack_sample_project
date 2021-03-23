const users = (state = [], action) => {
    switch (action.type) {
      case 'SET_USERS':
      return  action.payload.data;
      case 'ADD_USER':
        return [
            ...state,
            action.payload
          ];
        case 'DELETE_USER':
         return state.filter(user => user.id !== action.payload.id);
        case 'UPDATE_USER':
          return state.map(user =>
            (user.id === action.payload.id)
              ? Object.assign({}, user, action.payload.data)
              : user
          );
        default:
            return state;
    } 
}
export default users;