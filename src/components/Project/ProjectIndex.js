import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ManageProject from './ManageProject';
import AddProject from './AddProject';
import ListProject from './ListProject';
import EditProject from './EditProject';
import Navbar from '../core/Navbar';
import Sidebar from '../core/Sidebar';
import AddDeveloper from '../Developer/AddDeveloper';
import ListDeveloper from '../Developer/ListDeveloper';
import ManageDeveloper from '../Developer/ManageDeveloper';
import EditDeveloper from '../Developer/EditDeveloper';
import AddModule from '../Module/AddModule';
import ListModule from '../Module/ListModule';
import ManageModule from '../Module/ManageModule';
import AddDefect from '../Defect/AddDefect';
import List from '../Defect/List';
import ManageDefect from "../Defect/ManageDefect";
import EditDefect from "../Defect/EditDefect";



export default class ProjectIndex extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Sidebar />
                <Switch>
                    <Route path="/AddProject" exact component={AddProject} />
                    <Route path="/ListProject" exact component={ListProject} />
                    <Route path="/ManageProject" exact component={ManageProject} />
                    <Route
                        path="/EditProject/:id"
                        exact
                        component={EditProject}
                    />
                    <Route path="/AddDeveloper" exact component={AddDeveloper} />
                    <Route path="/ListDeveloper" exact component={ListDeveloper} />
                    <Route path="/ManageDeveloper" exact component={ManageDeveloper} />
                    <Route path="/EditDeveloper/:developerId" exact component={EditDeveloper} />
                 
                    <Route path="/AddModule" exact component={AddModule}/>
                    <Route path="/ListModule" exact component={ListModule}/>
                    <Route path="/ManageModule" exact component={ManageModule} />

                    <Route path="/AddDefect" exact component={AddDefect}/>
                    <Route path="/List" exact component={List} />
                    <Route path="/ManageDefect" exact component={ManageDefect} />
                    <Route path="/EditDefect/:id" exact component={EditDefect}/>

                </Switch>
            </Router>

        )
    }
}