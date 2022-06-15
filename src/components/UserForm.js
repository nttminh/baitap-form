import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, updateUser } from '../Redux/actions/user'

function UserForm() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        dateOfBirth: '',
    })
    const user = useSelector(state => state.selectedUser)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setValues(prevValues => ({
            ...prevValues,
            [event.target.name]: event.target.value,
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        if (user.id) {
            // Cập nhật
            const action = updateUser(user.id, values)
            dispatch(action)
        } else {
            // Tạo mới
            const id = Math.floor(Math.random() * 100)
            const newUser = { ...values, id }
            const action = createUser(newUser)
            dispatch(action)
        }

        setValues({
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            dateOfBirth: '',
        })
    }

    useEffect(() => {
        if (user.id) {
            setValues(user)
        }
    }, [user])


    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-6">
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="form-control"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="form-control"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="form-control"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dateOfBirth" className="form-label">
                            Date of Birth
                        </label>
                        <input
                            type="text"
                            id="dateOfBirth"
                            className="form-control"
                            name="dateOfBirth"
                            value={values.dateOfBirth}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button className="btn btn-success">{user.id ? "Update" : "Create"}</button>
            </div>
        </form>
    )
}


export default UserForm