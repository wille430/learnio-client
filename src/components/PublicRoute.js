import { UserContext } from 'Context/UserContext';
import * as React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest}) => {
    const { token } = React.useContext(UserContext)
    return (
        <Route {...rest} render={props => (
            !token ? <Component {...props}/> : <Redirect to="/"/>
        )}/>
    )
}

export default PublicRoute