const { orderSchema } = require('../validation/validate');
const { Order } = require('../../database/Order');

console.log(Order);
const createOrder = (req, res) => { 
    Order.create(req.body)
    .then(order => res.json(order))
  }
  
  const getOrders = (req, res) => {
      Order.findAll().then(orders => res.json(orders))
  };
  
  
  const updateOrder = async(req, res) => {
  const validation = orderSchema.validate(req.body)
  if(!validation.error){
  const UpdatedOrder = await Order.update(req.body, {where: {id: req.params.id}, returning:true, plain: true,})
  res.send(UpdatedOrder[1].toJSON())
  
  }
  else {
   res.status(422).json({
     message:'Validation error.',
     error: validation.error,
  
   });
  }
  };
  
  const deleteOrder = (req, res) => {
  Order.destroy({where: {id:req.params.id}})
  res.send(req.params.id);
  };


  module.exports = {
      createOrder,
      getOrders,
      updateOrder,
      deleteOrder,

  }