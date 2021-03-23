import React from 'react';
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers';
import Joi from 'joi';
import { useDispatch, useSelector} from 'react-redux'
import {ADD_ORDER, UPDATE_ORDER} from '../../saga/orders'



const OrderForm = React.forwardRef(({orderId, buttonHidden = false}, ref) => { 
    const dispatch = useDispatch()
    const validationSchema = Joi.object().keys({
        orderNumber: Joi.number().required(),
        customer: Joi.number().required(),
        orderDate: Joi.string().pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/),
        shippingDate: Joi.string().pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/),
        cost: Joi.number().required(),
        items: Joi.array().required().items(Joi.object().keys({
          itemId: Joi.number().required(),
          count: Joi.number(),
          price: Joi.number(),
          cost: Joi.number(),
        })),
        status: Joi.string().valid('open', 'done', 'closed')
    });

    const order = useSelector(state => state.orders.find(stateOrder => {
        return stateOrder.id === orderId
    }));

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: joiResolver(validationSchema),
        defaultValues: order ? order : {}
    });

    function onSubmit(data) {
        if(!order) {
            dispatch({type:ADD_ORDER,
                payload:data});
            reset();
            return;
        }
        dispatch({type:UPDATE_ORDER,
            payload:{id:order.id, data:data}}); 
    }

    return (
        <div className="card m-3">
            <h5 className="card-header">Order Form</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Order Number</label>
                            <input name="orderNumber" type="number" ref={register} className={`form-control ${errors.orderNumber ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.orderNumber?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label>Customer</label>
                            <input name="customer" type="number" ref={register} className={`form-control ${errors.customer ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.customer?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-4">
                            <label>Order Date</label>
                            <input name="orderDate" type="text" ref={register} className={`form-control ${errors.orderDate ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.orderDate?.message}</div>
                        </div>
                        <div className="form-group col">    
                            <label>Shipping Date</label>
                            <input name="shippingDate" type="text" ref={register} className={`form-control ${errors.shippingDate ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.shippingDate?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">    
                            <label>Cost</label>
                            <input name="cost" type="number" ref={register} className={`form-control ${errors.cost ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.cost?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col">
                            <label>itemId</label>
                            <input name="items[0].itemId" type="number" ref={register} className={`form-control ${errors.items?.[0].itemId ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">Required Field</div>
                        </div>
                        <div className="form-group col">
                            <label>Count</label>
                            <input name="items[0].count" type="number" ref={register} className={`form-control ${errors.items?.[0].count ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">Required Field</div>
                        </div>
                        <div className="form-group col">
                                <label>Price</label>
                                <input name="items[0].price" type="number" ref={register} className={`form-control ${errors.items?.[0].price ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">Required Field</div>
                            </div>
                            <div className="form-group col">
                                <label>Cost</label>
                                <input name="items[0].cost" type="number" ref={register} className={`form-control ${errors.items?.[0].cost ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">Required Field</div>
                            </div> 
                    </div> 
                    <div className="form-group">
                        <button ref={ref} type="submit" style={{ 'display': buttonHidden ? 'none' : 'block'}} className="btn btn-primary mr-1">Apply order</button>
                    </div>
                </form>
            </div>
        </div>   
    )

});


export default OrderForm;



