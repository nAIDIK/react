
import React from 'react'

const UserList = ({users}) => {
        
        return(
        <ul>
             {users.map(user => (
                <li key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </li>
             ))}
        </ul>
    )

}

export default UserList