import React, { Component } from 'react';
import './css/dashboard.css';
import Navbar from './components/Navbar';
import Sidebar from './core/Sidebar';
import AddDefect from './components/AddDefect';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import List from './components/List';
import AddUser from './components/AddUser';
import ListUser from './components/ListUser';
import AddProject from './components/AddProject';
import ListProject from './components/ListProject';
import AddModule from './components/AddModule';
import ListModule from './components/ListModule';
import AddDeveloper from './components/AddDeveloper';
import ListDeveloper from './components/ListDeveloper';




class App extends Component {
  render() {
    return (

      <div className="App">
        <Router>
          <Navbar />
          <Sidebar />

          <Route path="/AddDefect" exact render={
            () => {
              return (
                <AddDefect />
              )
            }
          } />

          <Route path="/List" exact render={
            () => {
              return (
                <List />
              )
            }
          } />

          <Route path="/AddUser" exact render={
            () => {
              return (
                <AddUser />
              )
            }
          } />

          <Route path="/ListUser" exact render={
            () => {
              return (
                <ListUser />
              )
            }
          } />

          <Route path="/AddProject" exact render={
            () => {
              return (
                <AddProject />
              )
            }
          } />

          <Route path="/ListProject" exact render={
            () => {
              return (
                <ListProject />
              )
            }
          } />

          <Route path="/AddModule" exact render={
            () => {
              return (
                <AddModule />
              )
            }
          } />

          <Route path="/ListModule" exact render={
            () => {
              return (
                <ListModule />
              )
            }
          } />

          <Route path="/AddDeveloper" exact render={
            () => {
              return (
                <AddDeveloper />
              )
            }
          } />

          <Route path="/ListDeveloper" exact render={
            () => {
              return (
                <ListDeveloper />
              )
            }
          } />

        </Router>

      </div>
    );
  }
}

export default App;
