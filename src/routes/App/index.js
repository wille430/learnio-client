import React, { useContext } from 'react';
// import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserContext } from 'Context/UserContext';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';

// Routes
import Hub from 'routes/Hub'
import Home from 'routes/Home';
import Login from 'routes/Login';
import Register from 'routes/Register';
import CreateProject from 'routes/CreateProject';



const App = () => {

  const { token } = useContext(UserContext)

  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <PrivateRoute path="/create-project" component={CreateProject} />
        <Route path="/" component={
          token ? Hub : Home
        } />
      </Switch>
    </Router>
  );
}

export default App;