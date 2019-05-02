import React from 'react';

export default class ListModule extends React.Component {

    state = {
        Module:[],
        Developer:[],
        Project:[]
    };
    Project={
        projectName:"",
    }

    Developer={
        developerName:"",
    }

    componentDidMount() { 
        this.getPost();
    }

    getPost(){
        fetch("http://localhost:8080/defectapplication/findAllModule")
        .then((res)=> (res.json()))
        .then((data)=>{
            console.log(data);
            this.setState({ Module: data});
        })      
    }

    render() {
        return (
            <div className="bs-example-module">
              
                    <div className="bs-example">
                       
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ModuleID</th>
                                    <th>ModuleName</th>                                   
                                    <th>DeveloperID</th>
                                    <th>ProjectID</th>
                                </tr>
                            </thead>
                            <tbody id="Module">
                            {this.state.Module.map(e => (
                                <tr>
                                    <td>{e.moduleId}</td>
                                    <td>{e.moduleName}</td>     
                                    <td>{e.developer.developerId}</td>
                                    <td>{e.project.projectId}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

            </div>

        )
    }
}
