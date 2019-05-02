import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditDeveloper extends Component {
    state = {
       
      developerId:"",
        developerName:""
      
    }

    handleChange = (e) => {
        this.setState({
            [e.target.developerId]: e.target.value
        })
    }

    componentDidMount(){
        console.log(this.props.match.params.developerId)
        let url =`http://localhost:8080/defectapplication/findAllDevelopers/${this.props.match.params.developerId}`
        fetch(url)
        .then((res)=> (res.json()))
        .then((data)=>{
            console.log(data);
            let developerId=data.developerId;
            let developerName=data.developerName;
    
            this.setState({ developerId});
            this.setState({ developerName});
        })
    }

    updateDeveloper(data){
        let ur=`http://localhost:8080/defectapplication/updateDeveloper`
        fetch(ur, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>{
            return res;
        })
        .catch(err => err)
    }

    handleUpdate = e=>{
        e.preventDefault();
        const DeveloperUpdate = {
            developerId : this.state.developerId,
            developerName: this.state.developerName,
        }
        this.updateDeveloper(DeveloperUpdate);
        console.log(DeveloperUpdate);
    }

    render() {
        return (
            <div className="project">
                <div className="addProject">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1>Update Developer</h1>
                                <form >
                                <div className="row">
                                        <div className="col-xs-6">
                                            <label htmlFor="developerId">Developer ID</label>
                                            <input type="text" className="form-control form-control-lg" value={this.state.developerId} id="developerId" onChange={e=>this.handleChange(e)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <label htmlFor="developerName">Developer Name</label>
                                            <input type="text" className="form-control form-control-lg" value={this.state.developerName} id="developerName" onChange={e=>this.handleChange(e)} />
                                        </div>
                                    </div>

                                    <br></br>
                                    <div className="col-xs-3">
                                      <button type="submit" className="btn btn-primary btn-block mt-2" onClick={e=>this.handleUpdate(e)}>Submit</button>
                                    </div>
                                    <div className="col-xs-3">
                                        <Link to="/ManageDeveloper"><button type="submit" className="btn btn-primary btn-block mt-2"  >Back</button></Link>
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

export default EditDeveloper