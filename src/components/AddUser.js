import React, { Component } from 'react';

class AddUser extends Component {
    state = {
       
        userName:null,
        userPassword:null,
        role:null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        fetch("http://localhost:8080/defectapplication/saveUser", {
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
            <div className="user">
                <div className="addUser">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1>Add User</h1>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <label htmlFor="id">User Name</label>
                                            <input type="text" className="form-control form-control-lg" id="userName" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-xs-6">
                                            <label htmlFor="id">Password</label>
                                            <input type="text" className="form-control form-control-lg" id="userPassword" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                       
                                        <div className="col-xs-6">
                                            <label htmlFor="severity">Role</label>
                                            <select className="form-control form-control-lg" id="role" onChange={this.handleChange}>
                                                <option value="">Choose Option</option>
                                                <option value="qa">QA</option>
                                                <option value="developer">Developer</option>
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

export default AddUser