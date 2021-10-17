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
import Login from "./componenets/Login/Login";
import Register from "./componenets/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./componenets/PrivateRoute/PrivateRoute";
import Shipping from "./componenets/Shipping/Shipping";

function App() {
  return (
    <div >
      <AuthProvider>

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
          <PrivateRoute path="/inventory">
<Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/shipping">
<Shipping></Shipping>
          </PrivateRoute>
          <PrivateRoute path="/placeorder">
<PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
           <Register></Register>
          </Route>
          <Route path="*">
<NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      </AuthProvider>
     
    </div>
  )
}

export default App;
