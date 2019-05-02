import React from 'react';

export default class List extends React.Component {

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

    render() {
        return (
            <div className="bs-example-defect">
              
                    <div className="bs-example">
                       
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>DefectID</th>
                                    <th>Module</th>
                                    <th>Description</th>
                                    <th>StepsRecreate</th>
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
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.Defect.map(e => (
                                <tr>
                                    <td>{e.defectId}</td>
                                    <td>{e.module}</td>
                                    <td>{e.description}</td>
                                    <td>{e.stepRecreate}</td>
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
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
            </div>

        )
    }
}

