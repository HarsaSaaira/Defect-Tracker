import React from 'react';

export default class List extends React.Component {

    state = {
        Defect:[]
    };

    async componentDidMount() {
        // const url = "http://localhost:3000/AddDefect";
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({ detail: data.AddDefect, loading: false });
        // console.log(data); 
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
        // if (this.state.loading) {
        //     return <div>loading...</div>
        // }

        // if (!this.state.detail.length) {
        //     return <div>didn't get a person</div>
        // }
        return (
            <div className="bs-example-defect">
              
                    <div className="bs-example">
                       
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>DefectID</th>
                                    <th>ModuleID</th>
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
                                    <td>{e.moduleId}</td>
                                    <td>{e.description}</td>
                                    <td>{e.stepRecreate}</td>
                                    <td>{e.severity}</td>
                                    <td>{e.Priority}</td>
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

