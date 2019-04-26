import React from 'react';

export default class ListDeveloper extends React.Component {

    state = {
        Developer:[]
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
        fetch("http://localhost:8080/defectapplication/findAllDeveloper")
        .then((res)=> (res.json()))
        .then((data)=>{
            console.log(data);
            this.setState({ Developer: data});
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
                                    <th>DeveloperID</th>
                                    <th>DeveloperName</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.Developer.map(e => (
                                <tr>
                                    <td>{e.developerId}</td>
                                    <td>{e.developerName}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

            </div>

        )
    }
}

