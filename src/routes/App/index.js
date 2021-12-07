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
import Techniques from 'routes/Techniques';
import Project from 'routes/Project';
import AddFlashcard from 'routes/AddFlashcard'
import Footer from 'components/Footer';
import Flashcards from 'routes/Flashcards';
import Queue from 'routes/Queue';



const App = () => {

  const { token } = useContext(UserContext)

  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <PrivateRoute path="/create-project" component={CreateProject} />
        <PrivateRoute path="/techniques" component={Techniques} />
        <PrivateRoute exact path="/project/:project_id" component={Project} />
        <PrivateRoute path="/project/:project_id/flashcards/queue" component={Queue} />
        <PrivateRoute path="/project/:project_id/flashcards/create" component={AddFlashcard} />
        <PrivateRoute path="/project/:project_id/flashcards" component={Flashcards} />
        <Route path="/" component={
          token ? Hub : Home
        } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;