import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './componenets/Header/Header';
import Shop from './componenets/Shop/Shop';
import OrderReview from './componenets/OderReview/OderReview'
import Inventory from './componenets/Inventory/Inventory'
import NotFound from './componenets/NotFound/NotFound'
import PlaceOrder from "./componenets/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div >
      
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
           <Shop></Shop>
          </Route>
          <Route  path="/shop">
           <Shop></Shop>
          </Route>
          <Route path="/review">
<OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
<Inventory></Inventory>
          </Route>
          <Route path="/placeorder">
<PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
<NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
     
    </div>
  )
}

export default App;
