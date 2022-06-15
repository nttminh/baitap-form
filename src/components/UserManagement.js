import React from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

export default function UserManagement() {
    return (
        <div className="container">
            <h1 className="text-center">User Management</h1>
            <UserForm />
            <UserList />
        </div>
    )
}
