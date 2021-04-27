import React from "react";
import UserItem from "./Useritem";
import Spinner from "../layout/spinner";
import PropTypes from 'prop-types'

const Users = ({users, loading}) => {
    if (loading){
        return <Spinner />
    }
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem user={user}/>
                ))}


            </div>

        )

}

// Users.propTypes = {
//     users: PropTypes.array.isRequired,
//     loading: PropTypes.boolean.isRequired
// }

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users