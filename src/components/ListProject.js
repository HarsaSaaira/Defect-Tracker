import React from 'react';

export default class ListProject extends React.Component {

    state = {
        Project:[]
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
        fetch("http://localhost:8080/defectapplication/findAllProject")
        .then((res)=> (res.json()))
        .then((data)=>{
            console.log(data);
            this.setState({ Project: data});
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
            <div className="bs-example-project">
              
                    <div className="bs-example">
                       
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ProjectID</th>
                                    <th>ProjectName</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.Project.map(e => (
                                <tr>
                                    <td>{e.projectId}</td>
                                    <td>{e.projectName}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

            </div>

        )
    }
}

