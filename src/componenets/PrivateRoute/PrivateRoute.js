import React from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    let {user}=useAuth()
    return (
        <Route
        {...rest}
        render={({location})=>user.email?children: <Redirect to={{
            pathname:'/login',
            state:{from:location}
        }}></Redirect> }>

        </Route>
    );
};

export default PrivateRoute;