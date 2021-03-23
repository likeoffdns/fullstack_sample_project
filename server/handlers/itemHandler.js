const { itemSchema } = require('../validation/validate')
const { Item } = require('../../database/Item');



const createItem = (req, res) => { 
    Item.create(req.body)
    .then(item => res.json(item))
  }
  
  const getItems = (req, res) => {
      Item.findAll().then(items => res.json(items))
  };
  
  
  const updateItem = async(req, res) => {
  const validation = itemSchema.validate(req.body)
  if(!validation.error){
  const UpdatedItem = await Item.update(req.body, {where: {id: req.params.id}, returning:true, plain: true,})
  res.send(UpdatedItem[1].toJSON())
  
  }
  else {
   res.status(422).json({
     message:'Validation error.',
     error: validation.error,
  
   });
  }
  };

  const deleteItem = (req, res) => {
    Item.destroy({where: {id:req.params.id}})
    res.send(req.params.id);
    };
    
    
  

module.exports = {
    createItem,
    getItems,
    updateItem,
    deleteItem
}