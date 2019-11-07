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
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router>
          <Link to="/">All Phones</Link>
          <Route exact path="/">
            <Phonelist/>
          </Route>
          <Route exact path="/edit/:id">
            <EditPhone/>
          </Route>
          <Route exact path="/delete/:id">
            <DeletePhone/>
          </Route>
        </Router>
      </div>
    )
  }

}

export default App;
