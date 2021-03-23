import React from 'react';
import  UserForm  from './Users/UserForm';
import OrderForm  from './Orders/OrderForm';
import ItemForm from '../components/Items/ItemForm';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import OrderList from './Orders/OrderList';
import ItemList from './Items/ItemList'
import UserList from './Users/UserList'


const App = () => (
  <div style={{padding: '50px'}}>
    <Router>
      <Route path='/orders'>
        <OrderForm/>
        <OrderList />
      </Route>
      <Route path='/users'>
        <UserForm />
        <UserList />
      </Route>
      <Route path='/items'>
        <ItemForm />
        <ItemList />
      </Route>
    </Router>

  </div>
)

export default App;
