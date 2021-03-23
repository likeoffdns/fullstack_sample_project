import React from 'react';
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers';
import Joi from 'joi';
import { useDispatch, useSelector } from "react-redux";
import {ADD_ITEM, UPDATE_ITEM} from '../../saga/items';



const ItemForm = React.forwardRef(({itemId, buttonHidden = false}, ref) => {

    const validationSchema = Joi.object().keys({
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
        bookedAmount: Joi.number().min(0),
      })

    const item = useSelector(state => state.items.find(stateItem => {
        return stateItem.id === itemId
    }));

    
    const dispatch = useDispatch()
    const { register, handleSubmit, errors,reset } = useForm({
        resolver: joiResolver(validationSchema),
        defaultValues: item ? item : {}

    });
    function onSubmit(data) {
        if(!item) {
            dispatch({type:ADD_ITEM, payload:data});
            reset();
            return;
        }
        dispatch({type:UPDATE_ITEM,payload:{id:item.id, data:data}}); 
    }
    return (
        <div className="card m-3">
            <h5 className="card-header">Item Form</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Title</label>
                            <input name="title" type="text" ref={register} className={`form-control ${errors.title ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.title?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label>Description</label>
                            <input name="description" type="text" ref={register} className={`form-control ${errors.description ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.description?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-4">
                            <label>Image URL </label>
                            <input name="image" type="text" ref={register} className={`form-control ${errors.image ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">Please insert correct data</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">    
                            <label>Length</label>
                            <input name="dimensions.length" type="number" ref={register} className={`form-control ${errors.dimensions?.length ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">Required Field</div>
                        </div>
                        <div className="form-group col">
                            <label>Width</label>
                            <input name="dimensions.width" type="text" ref={register} className={`form-control ${errors.dimensions?.width ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">Required Field</div>
                        </div>
                        <div className="form-group col">
                            <label>Height</label>
                            <input name="dimensions.height" type="text" ref={register} className={`form-control ${errors.dimensions?.height ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">Required Field</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                                <label>Weight</label>
                                <input name="weight" type="number" ref={register} className={`form-control ${errors.weight ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.weight?.message}</div>
                            </div>
                            <div className="form-group col">
                                <label>Price</label>
                                <input name="price" type="number" ref={register} className={`form-control ${errors.price ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.price?.message}</div>
                            </div> 
                    </div> 
                    <div className="form-group">
                    <button ref={ref} type="submit" style={{ 'display': buttonHidden ? 'none' : 'block'}} className="btn btn-primary mr-1">Apply Item</button>
                    </div>
                </form>
            </div>
        </div>
    )

})


export default ItemForm;