let index = 1;

export const setItems = data => ({
    type: 'SET_ITEMS', 
    payload: {data}
})

export const addItem = data => ({
    type: 'ADD_ITEM',
    payload:{
    id: index++,
    title: data.title,
    description:data.description,
    image: data.image,
    weight: data.weight,
    price: data.price,
    dimensions: data.dimensions
}
})

export const deleteItem = id => ({
    type: 'DELETE_ITEM',
    payload:{id}
})

export const updateItem = (id,data) => ({
    type:'UPDATE_ITEM',
    payload:{
        id,
        data
    }
})
