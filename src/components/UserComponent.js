import React from 'react';
import UserSrvice from '../services/UserService';

class UserComponent extends React.Component {
    constructor() {
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    render() {
        return (
            <div>

            <h1> Users List </h1>
            <table>

                <thead>
                    <tr>
                        <td>User Id</td>
                        <td>User First Name</td>
                        <td>User Last Name</td>
                        <td>User Email ID</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(
                            user => 
                            <tr key= {user.id}>

                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.emailId}</td>

                            </tr>
                        )

                    }
                </tbody>
            </table>

            </div>
        )
    }
}

export default UserComponent;