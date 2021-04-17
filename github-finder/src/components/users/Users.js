import React, {Component} from "react";
import UserItem from "./Useritem";

export class Users extends Component {

    state = {
        users: []
    }

    render() {


        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem user={user}/>
                ))}


            </div>

        )
    }
}


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat (3, 1fr)',
    gridGap: '1rem'
};

export default Users