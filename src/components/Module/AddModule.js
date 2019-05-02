import React, { Component } from 'react';

class AddModule extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Project: [],
            Developer: [],
            post: []
        }
    }
    state = {
        moduleName: null,
        projectId: null,
        developerId: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let d = {
            
                "moduleName": this.state.moduleName,
                "project": {
                    "projectId": this.state.projectId,
                   
                },
                "developer": {
                    "developerId": this.state.developerId,

                }
            
        }
        //console.log(this.state);
        console.log(d);
        fetch("http://localhost:8080/defectapplication/saveModule", {
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(d)
        })
    };

    componentDidMount() {

        let url = "http://localhost:8080/defectapplication/findAllProject";
        console.log(url);
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)

                let project = data.map((post) => {
                    return (
                        <option value={post.projectId}>{post.projectName}</option>
                    )
                })

                this.setState({ project: project });
            })

        let ur = "http://localhost:8080/defectapplication/findAllDeveloper";
        console.log(ur);
        fetch(ur)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)

                let developer = data.map((post) => {
                    return (
                        <option value={post.developerId}>{post.developerName}</option>
                    )
                })

                this.setState({ developer: developer });
            })
    }
    render() {
        return (
            <div className="module">
                <div className="addModule">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1>Add Module</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <label htmlFor="id">Module Name</label>
                                            <input type="text" className="form-control form-control-lg" id="moduleName" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-xs-6">
                                            <label htmlFor="projectId">Project ID</label>
                                            {/* <input type="text" className="form-control form-control-lg" id="projectId" onChange={this.handleChange} /> */}
                                            <select id="projectId" className="form-control" onChange={this.handleChange}>
                                            <option>Choose Option</option>
                                                {this.state.project}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-xs-6">
                                            <label htmlFor="developerId">Developer ID</label>
                                            {/* <input type="text" className="form-control form-control-lg" id="userId" onChange={this.handleChange} /> */}
                                            <select id="developerId" className="form-control" onChange={this.handleChange}>
                                            <option>Choose Option</option>
                                                {this.state.developer}
                                            </select>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="col-xs-4">
                                        <center> <input type="submit" className="btn btn-primary btn-block mt-2" /></center>
                                    </div><br></br>
                                    <br></br>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddModule