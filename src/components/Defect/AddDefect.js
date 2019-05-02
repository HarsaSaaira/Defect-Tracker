import React, { Component } from "react";

class AddDefect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mod: [],
            Developer: [],
            dev: []
        }
    }

    state = {

        module: null,
        description: null,
        defectType: null,
        severity: null,
        priority: null,
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

    handleChange1 = (e) => {
        this.setState({
            module: e.target.value
        });
        console.log(e.target.value)
        let url = `http://localhost:8080/defectapplication/findAllModules/${e.target.value}`;
        console.log(url);
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                console.log(data.developer.developerName)
                this.setState({ dev: data.developer });
                console.log(this.state.dev);
            })

    };

    handleChange2 = (e) => {
        this.setState({
            assignTo: e.target.value
        });
        console.log(e.target.value)

    }


    handleSubmit = (e) => {
        e.preventDefault();
        let defect = {
            "module": this.state.module,
            "description": this.state.description,
            "defectType": this.state.defectType,
            "severity": this.state.severity,
            "priority": this.state.priority,
            "stepRecreate": this.state.stepRecreate,
            "assignTo": this.state.assignTo,
            "status": this.state.status,
            "enterDate": this.state.enterDate,
            "enterBy": this.state.enterBy,
            "fixedDate": this.state.fixedDate,
            "fixedBy": this.state.fixedBy,
            "availableIn": this.state.availableIn,
            "comments": this.state.comments,
        }
        console.log(defect);

        fetch("http://localhost:8080/defectapplication/saveDefect",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json,text/plain,*/*',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(defect)
            })
    };

    componentDidMount() {
        this.select()
        let url = `http://localhost:8080/defectapplication/findAllModule`;
        console.log(url);
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)

                let mod = data.map((post) => {
                    return (
                        <option value={post.moduleId}>{post.moduleId}</option>
                    )
                })
                this.setState({ mod: mod });
            })
    }

    select(id) {
        console.log(id)
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
                                            <label htmlFor="module">Module Name</label>
                                            <select id="module" className="form-control" onChange={(e) => this.handleChange1(e)}>
                                                <option>Choose Option</option>
                                                {this.state.mod}
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
                                            <label htmlFor="priority">Priority</label>
                                            <select className="form-control form-control-lg" id="priority" onChange={this.handleChange}>
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
                                                <option value="UI">UI</option>
                                                <option value="Functionality">Functionality</option>
                                                <option value="Enhancement">Enhancement</option>
                                                <option value="Proformance">Proformance</option>
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
                                                <option value="New">New</option>
                                                <option value="Open">Open</option>
                                                <option value="Fixed">Fixed</option>
                                                <option value="Closed">Closed</option>
                                                <option value="Reopened">Reopened</option>
                                                <option value="Rejected">Rejected</option>
                                                <option value="Deferred">Deferred</option>
                                            </select>
                                        </div>
                                        <div className="col-xs-6">
                                            <label htmlFor="developerId">Assigned To</label>
                                            <select className="form-control form-control-lg" id="developerId" value={this.state.assignTo} onChange={this.handleChange2}>
                                                <option>Choose Option</option>
                                                <option value={this.state.dev.developerName}> {this.state.dev.developerName}</option>
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