import React from 'react';


export default class ManageProject extends React.Component {

    state = {
        Project:[]

    };

    async componentDidMount() { 
        this.getPost();
    }
    edit(id){
        this.props.history.push(`/EditProject/${id}`);
        //console.log(id);
    }

    getPost(){
        fetch("http://localhost:8080/defectapplication/findAllProject")
        .then((res)=> (res.json()))
        .then((data)=>{
            console.log(data);
            this.setState({ Project: data});
        })
        
    }
    delete(id){
        console.log(id)
       let url=`http://localhost:8080/defectapplication/deleteProject/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(()=>{
            fetch("http://localhost:8080/defectapplication/findAllProject")
        .then((res)=> (res.json()))
        .then((data)=>{
            console.log(data);
            this.setState({ Project: data});
        })

        })
    }

   

    render() {
    
        return (
            <div className="bs-example-project">
              
                    <div className="bs-example">
                       
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ProjectID</th>
                                    <th>ProjectName</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.Project.map(e => (
                                <tr>
                                    <td>{e.projectId}</td>
                                    <td>{e.projectName}</td>
                                    <td><button className="btn btn-danger btn-sm" onClick={this.delete.bind(this,e.projectId)}>Delete</button></td>
                                    <td><button className="btn btn-primary btn-sm" onClick={this.edit.bind(this,e.projectId)}>
                                    Update
                                    </button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

            </div>

        )
    }
}


