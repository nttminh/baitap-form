import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, selectUser } from '../Redux/actions/user'

function UserList() {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    const onSelectUser = (user) => {
        const action = selectUser(user)
        dispatch(action)
    }

    const onDeleteUser = (userId) => {
        const action = deleteUser(userId)
        dispatch(action)
    }
    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Date of Birth</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>
                                <button
                                    className="btn btn-success"
                                    onClick={() => onSelectUser(user)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => onDeleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default UserList