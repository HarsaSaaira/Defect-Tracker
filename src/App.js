import React, { Component } from 'react';
import './css/dashboard.css';
import ProjectIndex from './components/Project/ProjectIndex';



class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectIndex />
      </div>
    );
  }
}

export default App;
