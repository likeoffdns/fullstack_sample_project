import '@testing-library/jest-dom';
import React from 'react'
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import  '../../../setupTests';



import ItemList from './ItemList'
import Item from './Item'


const mockStore = configureMockStore();

describe('testing visual appearance of the itemList component', () => {
    it('loading with no items', () => {
        const store = mockStore({
            items: [],
        });
        const wrapper = mount(
            <Provider store={store}>
                <ItemList/>
            </Provider>
        );
        expect(wrapper.find('tbody')).toHaveLength(1);
        expect(wrapper.find(Item)).toHaveLength(0);
    });
    it('test Item length with 2 items in store', () =>{
        const store = mockStore({
            items: [{
                title: 'test',
                id:0,
                dimensions:{
                    test:124
                }
            },
            {
                title: 'test2',
                id:1,
                dimensions:{
                    test:124
                 }
            },
            ]
        });
        const wrapper = mount(
            <Provider store={store}>
                <ItemList/>
            </Provider>
        );
        expect(wrapper.find(Item)).toHaveLength(2);
    });
    it('testing that table should have 8 rows', () => {
        const store = mockStore({
            items: [],
        });
        const wrapper = mount(
            <Provider store={store}>
                <ItemList/>
            </Provider>
        );
        expect(wrapper.find('th')).toHaveLength(8);
    })
})
