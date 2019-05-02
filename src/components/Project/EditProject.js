import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EditProject extends Component {
    state = {
      
        projectName:"",
        projectId:"",
        Project:[]
    }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         projectName:"",
    //     projectId:""
    //     }
    //     this.handleChange=this.handleChange.bind(this);
    //     this.handleUpdate=this.handleUpdate.bind(this);
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

componentDidMount(){
    console.log(this.props.match.params.id)
    let url =`http://localhost:8080/defectapplication/findAllProjects/${this.props.match.params.id}`
    fetch(url)
    .then((res)=> (res.json()))
    .then((data)=>{
        console.log(data);
        let projectId=data.projectId;
        let projectName=data.projectName;

        this.setState({ projectId});
        this.setState({ projectName});
    })
}
  
updateProject(ProjectUpdate){
        let ur=`http://localhost:8080/defectapplication/updateProject`
        fetch(ur, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(ProjectUpdate)
        })
        .then(res=>{
            return res;
        })
        .catch(err => err)
    }

    handleUpdate = e=>{
        e.preventDefault();
        const ProjectUpdate = {
            projectId : this.state.projectId,
            projectName: this.state.projectName,
        }
        this.updateProject(ProjectUpdate);
        console.log(ProjectUpdate);
    }

   
    render() {
        return (
            <div className="project">
                <div className="addProject">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1>Update Project</h1>
                                <form >
                                <div className="row">
                                        <div className="col-xs-6">
                                            <label htmlFor="projectId">Project ID</label>
                                            <input type="text" className="form-control form-control-lg" value={ this.state.projectId} id="projectId" onChange={e=>this.handleChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <label htmlFor="projectName">Project Name</label>
                                            <input type="text" className="form-control form-control-lg" value={this.state.projectName} id="projectName" onChange={e=>this.handleChange(e)} />
                                        </div>
                                    </div>

                                    <br></br>
                                    <div className="col-xs-3">
                                        <button type="submit" className="btn btn-primary btn-block mt-2" onClick={e=>this.handleUpdate(e)} >Submit</button>

                                    </div>
                                    <div className="col-xs-3">
                                        <Link to="/ManageProject"><button type="submit" className="btn btn-primary btn-block mt-2"  >Back</button></Link>
                      
                                    </div>
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

export default EditProject