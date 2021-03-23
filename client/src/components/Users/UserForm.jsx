import React from 'react';
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers';
import Joi from 'joi';
import { useDispatch, useSelector } from "react-redux";
import {CREATE_USER, UPDATE_USER} from '../../saga/users';


const UserForm = React.forwardRef(({userId, buttonHidden = false}, ref) => {

    const validationSchema = Joi.object().keys({ 
        firstName: Joi.string().required().max(20),
        lastName: Joi.string().required().max(20),
        birthday: Joi.string().pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/),
        adress: Joi.array().required().items(Joi.object({
          city:Joi.string().required(),
          adressId: Joi.number(),
          country: Joi.string().required(),
          street1: Joi.string().required(),
          street2:Joi.string().optional().allow(''),
      })),
        rating: Joi.number().integer().min(0).max(5)
    
      }) 
      const user = useSelector(state => state.users.find(stateUser => {
        return stateUser.id === userId
    }));
    const dispatch = useDispatch()

    const { register, handleSubmit, errors,reset } = useForm({
        resolver: joiResolver(validationSchema),
        defaultValues: user ? user : {}
    });

    function onSubmit(data) {
        if(!user) {
            dispatch({type:CREATE_USER,
            payload:data});
            reset();
            return;
        }
        dispatch({type:UPDATE_USER,payload:{id:user.id, data:data}}); 
    }

    return (
        <div className="card m-3">
            <h5 className="card-header">Users Form</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-row">
                        <div className="form-group col">
                            <label>First Name</label>
                            <input name="firstName" type="text" ref={register} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label>Last Name</label>
                            <input name="lastName" type="text" ref={register} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-4">
                            <label>Date of Birth</label>
                            <input name="birthday" type="text" ref={register} className={`form-control ${errors.birthday ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">Please insert date in format DD/MM/YYYY</div>
                        </div>
                        <div className="form-group col">
                            <label>Rating</label>
                            <input name="rating" type="number" ref={register} className={`form-control ${errors.rating ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.rating?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">    
                            <label>City</label>
                            <input name="adress[0].city" type="text" ref={register} className={`form-control ${errors.adress?.[0].city ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">Required Field</div>
                        </div>
                        <div className="form-group col">
                            <label>Country</label>
                            <input name="adress[0].country" type="text" ref={register} className={`form-control ${errors.adress?.[0].country ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">Required Field</div>
                        </div>
                        <div className="form-group col">
                            <label>Street</label>
                            <input name="adress[0].street1" type="text" ref={register} className={`form-control ${errors.adress?.[0].street1 ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">Required Field</div>
                        </div>
                        <div className="form-group col">
                            <label>Street 2</label>
                            <input name="adress[0].street2" type="text" ref={register} className='form-control'/>
                        </div>
                    </div>
                    <div className="form-group">
                    <button ref={ref} type="submit" style={{ 'display': buttonHidden ? 'none' : 'block'}} className="btn btn-primary mr-1">Apply User</button>
                    </div>
                </form>
            </div>
        </div>
    )
})



export default  UserForm ;