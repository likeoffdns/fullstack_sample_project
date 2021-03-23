import '@testing-library/jest-dom';
import React from 'react'
import '../../setupTests'
import items from './items';


describe('testing items reducers', () => {
    it('should handle initial state', () =>{
       expect(items(undefined, {})).toEqual([]);
       expect(items([], {
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
           }
       )).toEqual([{
               id: 1,
               title: 'test',
               description: 'test2',
               image: 'testImg',
               weight: 3,
               price: 322,
               dimensions: {}
       }]);

    });
});



