import React, { Component } from 'react';

export default class AddProject extends Component {
    state = {
      
        projectName:null
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        fetch("http://localhost:8080/defectapplication/saveProject", {
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    };

    render() {
        return (
       // <div> hhh </div>
            <div className="project">
                <div className="addProject">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1>Add Project</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <label htmlFor="id">Project Name</label>
                                            <input type="text" className="form-control form-control-lg" id="projectName" onChange={this.handleChange} />
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

// export default AddProject