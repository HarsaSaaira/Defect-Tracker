import React from 'react';


export default class ManageDeveloper extends React.Component {

    state = {
        Developer: []
    };

    async componentDidMount() {
        this.getPost();
    }
    edit(developerId){
        this.props.history.push(`/EditDeveloper/${developerId}`);
        //console.log(developerId);
    }

    getPost() {
        fetch("http://localhost:8080/defectapplication/findAllDeveloper")
            .then((res) => (res.json()))
            .then((data) => {
                console.log(data);
                this.setState({ Developer: data });
            })
    }

    delete(id) {
        console.log(id)
        let url = `http://localhost:8080/defectapplication/deleteDeveloper/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(() => {
                fetch("http://localhost:8080/defectapplication/findAllDeveloper")
                    .then((res) => (res.json()))
                    .then((data) => {
                        console.log(data);
                        this.setState({ Developer: data });
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
                                <th>DeveloperID</th>
                                <th>DeveloperName</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Developer.map(e => (
                                <tr>
                                    <td>{e.developerId}</td>
                                    <td>{e.developerName}</td>
                                    <td><button className="btn btn-danger btn-sm" onClick={this.delete.bind(this, e.developerId)}>Delete</button></td>
                                    <td><button className="btn btn-primary btn-sm" onClick={this.edit.bind(this,e.developerId)}> Update</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

