import React from 'react';

export default class ListModule extends React.Component {

    state = {
        Module:[]
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
        fetch("http://localhost:8080/defectapplication/findAllModule")
        .then((res)=> (res.json()))
        .then((data)=>{
            console.log(data);
            this.setState({ Module: data});
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
            <div className="bs-example-module">
              
                    <div className="bs-example">
                       
                        <table className="table">
                            <thead>
                                <tr>
                                   
                                    <th>ModuleName</th>
                                    <th>ProjectID</th>
                                    <th>UserID</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.Module.map(e => (
                                <tr>
                                  
                                    <td>{e.moduleName}</td>
                                    <td>{e.projectId}</td>
                                    <td>{e.userId}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

            </div>

        )
    }
}
