import React, { useContext } from 'react';
import Hub from 'Hub'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'Home';
import { UserContext } from 'Context/UserContext';



const App = () => {

  const { token } = useContext(UserContext)

  return (
    <Router>
      <Switch>
        <Route path="/">
          { token ? <Hub /> : <Home/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;