import React from 'react';
import './App.css';
import Phonelist from './components/Phonelist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.serverUrl = 'http://localhost:3001';
  }
  render() {
    return (
      <div>
        <Phonelist serverUrl={this.serverUrl}/>
      </div>
    )
  }

}

export default App;
