import React, { useContext } from 'react';
import Hub from 'Hub'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'Home';
import { UserContext } from 'Context/UserContext';
import Login from 'Login';
import PublicRoute from 'components/PublicRoute';



const App = () => {

  const { token } = useContext(UserContext)

  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <Route path="/">
          {token ? <Hub /> : <Home />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;