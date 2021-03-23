const Joi = require('joi')

const userSchema = Joi.object().keys({ 
    firstName: Joi.string().required().max(20),
      lastName: Joi.string().required().max(20),
      birthday: Joi.string().pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/),
      adress: Joi.array().required().items(Joi.object({
        city:Joi.string().required(),
        adressId: Joi.number(),
        country: Joi.string().required(),
        street1: Joi.string().required(),
        street2:Joi.string()
    })),
      rating: Joi.number().integer().min(0).max(5)

    }) 

const orderSchema =  Joi.object().keys({
            orderNumber: Joi.number().required(),
            customer: Joi.number().required(),
            orderDate: Joi.string().pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/),
            shippingDate: Joi.string().pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/),
            cost: Joi.number().required(),
            items: Joi.array().required().items(Joi.object().required().keys({
              itemId: Joi.number().required(),
              count: Joi.number(),
              price: Joi.number(),
              cost: Joi.number(),
            })),
            status: Joi.string().valid('open', 'done', 'closed')
    
    })
    const itemSchema = Joi.object().keys({
          title: Joi.string().required(),
          description: Joi.string().max(200),
          image: Joi.string(),                                   
          dimensions: Joi.object().required().keys({
            length: Joi.number().required(),
            width: Joi.number().required(),
            height: Joi.number().required()
          }),
          weight: Joi.number().required(),
          price: Joi.number().required(),
          rating: Joi.number().integer().min(0).max(5),
          availableAmount: Joi.number().min(1),
          bookedAmount: Joi.number().min(0)
    
    })
    
    
module.exports = { 
  orderSchema,
  itemSchema,
  userSchema
}




