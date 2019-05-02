import React from 'react';

export default class ManageDefect extends React.Component {

    state = {
        Defect:[],
       
    };
   

    componentDidMount() {
        this.getPost();
    }

    getPost(){
        fetch("http://localhost:8080/defectapplication/findAllDefect")
        .then((res)=> (res.json()))
        .then((data)=>{
            console.log(data);
            this.setState({ Defect: data});
        })
        
    }

    edit(defectId){
        //console.log(defectId)
        this.props.history.push(`/EditDefect/${defectId}`);
    }

    delete(id){
        console.log(id)
       let url=`http://localhost:8080/defectapplication/deleteDefect/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(()=>{
            fetch("http://localhost:8080/defectapplication/findAllDefect")
        .then((res)=> (res.json()))
        .then((data)=>{
            console.log(data);
            this.setState({ Project: data});
        })

        })
    }


    render() {
        return (
            <div className="bs-example-defect">
              
                    <div className="bs-example">
                       
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>DefectID</th>
                                    <th>ModuleID</th>
                                    <th>Severity</th>
                                    <th>Priority</th>
                                    <th>DefectType</th>
                                    <th>EnterDate</th>
                                    <th>EnterBy</th>
                                    <th>Status</th>
                                    <th>AssignedTo</th>
                                    <th>FixedBy</th>
                                    <th>FixedDate</th>
                                    <th>AvailableIn</th>
                                    <th>Comments</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.Defect.map(e => (
                                <tr>
                                    <td>{e.defectId}</td>
                                    <td>{e.module}</td>
                                    <td>{e.severity}</td>
                                    <td>{e.priority}</td>
                                    <td>{e.defectType}</td>
                                    <td>{e.enterDate}</td>
                                    <td>{e.enterBy}</td>
                                    <td>{e.status}</td>
                                    <td>{e.assignTo}</td>
                                    <td>{e.fixedBy}</td>
                                    <td>{e.fixedDate}</td>
                                    <td>{e.availableIn}</td>
                                    <td>{e.comments}</td>
                                    <td><button className="btn btn-danger btn-sm" onClick={this.delete.bind(this,e.defectId)}>Delete</button></td>
                                    <td><button className="btn btn-primary btn-sm" onClick={this.edit.bind(this,e.defectId)}>Update</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
            </div>

        )
    }
}

