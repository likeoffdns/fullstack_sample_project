import '@testing-library/jest-dom';
import React from 'react'
import '../../setupTests'
import * as actions from './items';

describe('testing items actions', () => {
    it('setItems should create setItems action', () => {
        expect(actions.setItems({title:'sad'})).toEqual({
            type: 'SET_ITEMS',
            payload: {
                data:{
                    title:'sad'
                }
            }
        });
    });
    it('addItem should create addItem action', () => {
        expect(actions.addItem({
            title:'test',
            description: 'test2',
            image:'testImg',
            weight: 3,
            price: 322,
            dimensions:{}
        })).toEqual({
            type:'ADD_ITEM',
            payload:{
                id: 1,
                title: 'test',
                description: 'test2',
                image: 'testImg',
                weight: 3,
                price: 322,
                dimensions: {}
            }
        });
    });
    it('deleteItem should create deleteItem action', () => {
        expect(actions.deleteItem(1)).toEqual({
           type: 'DELETE_ITEM',
           payload: {
               id:1
           }
        });
    });
    it('updateItem should create updateItem action', () => {
        expect(actions.updateItem(1,{
            title: 'test',
            description: 'test2',
            image: 'testImg',
            weight: 3,
            price: 322,
            dimensions: {}
        })).toEqual({
           type:'UPDATE_ITEM',
           payload: {
               id: 1,
               data:{
                   title: 'test',
                   description: 'test2',
                   image: 'testImg',
                   weight: 3,
                   price: 322,
                   dimensions: {}
               }
           }
        });
    });


})



