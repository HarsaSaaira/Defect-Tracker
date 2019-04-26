import React, { Component } from "react";

class AddDefect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Module: [],
            Developer: [],
            post: []
        }
    }


    state = {

        moduleId: null,
        description: null,
        defectType: null,
        severity: null,
        Priority: null,
        stepRecreate: null,
        assignTo: null,
        status: null,
        enterDate: null,
        enterBy: null,
        fixedDate: null,
        fixedBy: null,
        availableIn: null,
        comments: null

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let d = {
            "module":{
                "moduleId": this.state.moduleId,
            },
            "description": this.state.description,
            "defectType": this.state.defectType,
            "severity": this.state.severity,
            "Priority": this.state.Priority,
            "stepRecreate": this.state.stepRecreate,
            "assignTo": this.state.assignTo,
            "status": this.state.status,
            "enterDate": this.state.enterDate,
            "enterBy": this.state.enterBy,
            "fixedDate": this.state.fixedDate,
            "fixedBy": this.state.fixedBy,
            "availableIn": this.state.availableIn,
            "comments": this.state.comments
        }

        // console.log(this.state);
        console.log(d);
        fetch("http://localhost:8080/defectapplication/saveDefect", {
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json'
            },
            // body: JSON.stringify(this.state)
            body: JSON.stringify(d)
        })
    };

    componentDidMount() {
        let url = "http://localhost:8080/defectapplication/findAllDefect";
        console.log(url);
        fetch(url)
            .then(resp => resp.json)
            .then(data => {
                console.log(data)
                let module = data.map((post) => {
                    return (
                        <option value={post.moduleId}>{post.moduleName}</option>
                    )
                })

                this.setState({ module: module });

            })
    }

    render() {
        return (
            <div className="defect">
                <div className="addDefect">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1>Add Defect</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <label htmlFor="moduleId">Module ID</label>
                                            {/* <input type="text" class="form-control form-control-lg" id="module" onChange={this.handleChange} /> */}
                                            <select id="moduleId" className="form-control" onChange={this.handleChange}>
                                            <option>Choose Option</option>
                                                {this.state.module}
                                            </select>
                                        </div>
                                        <div className="col-xs-6">
                                            <label htmlFor="description">Description</label>
                                            <textarea class="form-control form-control-lg" id="description" onChange={this.handleChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-xs-6">
                                            <label htmlFor="stepRecreate">Steps to Recreate</label>
                                            <textarea className="form-control form-control-lg" id="stepRecreate" onChange={this.handleChange}></textarea>
                                        </div>
                                        <div className="col-xs-6">
                                            <label htmlFor="severity">Severity</label>
                                            <select className="form-control form-control-lg" id="severity" onChange={this.handleChange}>
                                                <option value="">Choose Option</option>
                                                <option value="high">High</option>
                                                <option value="medium">medium</option>
                                                <option value="low">Low</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <label htmlFor="Priority">Priority</label>
                                            <select className="form-control form-control-lg" id="Priority" onChange={this.handleChange}>
                                                <option value="">Choose Option</option>
                                                <option value="high">High</option>
                                                <option value="medium">medium</option>
                                                <option value="low">Low</option>
                                            </select>
                                        </div>
                                        <div className="col-xs-6">
                                            <label htmlFor="defectType">Defect Type</label>
                                            <select className="form-control form-control-lg" id="defectType" onChange={this.handleChange}>
                                                <option value="">Choose Option</option>
                                                <option value="high">UI</option>
                                                <option value="medium">Functionality</option>
                                                <option value="low">Enhancement</option>
                                                <option value="low">Proformance</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-xs-6">
                                            <label htmlFor="enterDate">Entered Date</label>
                                            <input type="text" className="form-control form-control-lg" id="enterDate" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-xs-6">
                                            <label htmlFor="enterBy">Entered By</label>
                                            <input type="text" className="form-control form-control-lg" id="enterBy" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-xs-6">
                                            <label htmlFor="status">Status</label>
                                            <select className="form-control form-control-lg" id="status" onChange={this.handleChange}>
                                                <option value="">Choose Option</option>
                                                <option value="high">New</option>
                                                <option value="medium">Open</option>
                                                <option value="low">Fixed</option>
                                                <option value="low">Closed</option>
                                                <option value="low">Reopened</option>
                                                <option value="low">Rejected</option>
                                                <option value="low">Deferred</option>
                                            </select>
                                        </div>
                                        <div className="col-xs-6">
                                            <label htmlFor="assignTo">Assigned To</label>
                                            <select className="form-control form-control-lg" id="assignTo" onChange={this.handleChange}>
                                                <option value="">Choose Option</option>
                                                <option value="high">Keerthana</option>
                                                <option value="medium">Priyanka</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-xs-6">
                                            <label htmlFor="fixedBy">Fixed By</label>
                                            <input type="text" className="form-control form-control-lg" id="fixedBy" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-xs-6">
                                            <label htmlFor="fixedDate">Fixed Date</label>
                                            <input type="text" className="form-control form-control-lg" id="fixedDate" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-xs-6">
                                            <label htmlFor="availableIn">Available In</label>
                                            <input type="text" className="form-control form-control-lg" id="availableIn" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-xs-6">
                                            <label htmlFor="comments">Comments</label>
                                            <textarea className="form-control form-control-lg" id="comments" onChange={this.handleChange}></textarea>
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

export default AddDefect