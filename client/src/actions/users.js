let index = 1;

export const setUsers = data => ({
    type:'SET_USERS',
    payload: {data}
})

export const addUser = data => ({
    type: 'ADD_USER',
    payload:{
    id: index++,
    firstName:data.firstName,
    lastName:data.lastName,
    birthday: data.birthday,
    rating: data.rating,
    adress: data.adress
    
}
})

export const deleteUser = id => ({
    type: 'DELETE_USER',
    payload:{id}
})

export const updateUser = (id,data) => ({
    type:'UPDATE_USER',
    payload:{
        id,
        data
    }
})
