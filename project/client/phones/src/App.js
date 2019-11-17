import React from 'react';
import './App.css';
import Phonelist from './components/Phonelist';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditPhone from './components/EditPhone';
import DeletePhone from './components/DeletePhone';
import AddPhone from './components/AddPhone';
import Login from './components/Login';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <Router>
       
          <Link to="/phones">All Phones</Link>
          <Link to="/add">Add New Phone</Link>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/phones">
            <Phonelist/>
          </Route>
          <Route exact path="/edit/:id">
            <EditPhone/>
          </Route>
          <Route exact path="/delete/:id">
            <DeletePhone/>
          </Route>
          <Route exact path="/add">
            <AddPhone/>
          </Route>
        </Router>
      </div>
    )
  }

}

export default App;
