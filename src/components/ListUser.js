import React from 'react';

export default class ListUser extends React.Component {

    state = {
        User:[]
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
        fetch("http://localhost:8080/defectapplication/findAllUser")
        .then((res)=> (res.json()))
        .then((data)=>{
            console.log(data);
            this.setState({ User: data});
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
            <div className="bs-example-user">
              
                    <div className="bs-example">
                       
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.User.map(e => (
                                <tr>
                                   
                                    <td>{e.userName}</td>
                                    <td>{e.userPassword}</td>
                                    <td>{e.role}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

            </div>

        )
    }
}
