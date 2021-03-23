const express = require('express');

const itemHandler = require('./handlers/itemHandler');
const orderHandler = require('./handlers/orderHandler');
const userHandler = require('./handlers/userHandler');
const router = express.Router();

router.get('/users', userHandler.getUsers)     
router.post('/user', userHandler.createUser)  
router.put('/users/:id',userHandler.updateUser)
router.delete('/users/:id',userHandler.deleteUser)


router.get('/orders', orderHandler.getOrders)     
router.post('/order', orderHandler.createOrder)  
router.put('/orders/:id',orderHandler.updateOrder)
router.delete('/orders/:id',orderHandler.deleteOrder)

  


router.get('/items', itemHandler.getItems)     
router.post('/item', itemHandler.createItem)  
router.put('/items/:id',itemHandler.updateItem)
router.delete('/items/:id',itemHandler.deleteItem)





module.exports = router;
