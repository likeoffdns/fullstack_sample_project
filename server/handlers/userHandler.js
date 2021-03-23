const { UserSchema } = require('../validation/validate');
const { User } = require('../../database/User');


const createUser = (req, res) => { 
    User.create(req.body)
    .then(user => res.json(user))
}

  const getUsers = (req, res) => {
      User.findAll().then(users => res.json(users))
};

const updateUser = async(req, res) => {
const validation = userSchema.validate(req.body)
  if(!validation.error){
 const UpdatedUser = await User.update(req.body, {where: {id: req.params.id}, returning:true, plain: true,})
 res.send(UpdatedUser[1].toJSON())

  }
 else {
     console.log('test')
   res.status(422).json({
     message:'Validation error.',
     error: validation.error,

   });
 }
};

const deleteUser = (req, res) => {
  User.destroy({where: {id:req.params.id}})
	res.send(req.params.id);
};



module.exports ={
    createUser,
    getUsers,
    updateUser,
    deleteUser
}