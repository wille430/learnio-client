import { UserContext } from 'Context/UserContext';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom'

const PrivateRoute = ({ component, ...rest}) => {
    const { token } = React.useContext(UserContext)
    return (
        <Route {...rest} render={props => (
            token ? <Component {...props}/> : <Redirect to="/login"/>
        )}/>
    )
}

export default PrivateRoute