import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, updateUser } from '../Redux/actions/user'
import { userSchema } from '../Services/user'

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

    const handleSubmit = (values, { resetForm, setFieldValue }) => {
        if (user.id) {
            // Cập nhật
            const action = updateUser(user.id, values)
            dispatch(action)
        } else {
            // Tạo mới
            const id = Math.floor(Math.random() * 10000)
            const newUser = { ...values, id }
            const action = createUser(newUser)
            dispatch(action)
        }

        resetForm()
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
        <Formik
            initialValues={values}
            enableReinitialize
            onSubmit={handleSubmit}
            validationSchema={userSchema}
        >{({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting }) => {

            return (
                <Form onSubmit={(values) => handleSubmit(values)}>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">
                                    First Name
                                </label>
                                <Field
                                    type="text"
                                    id="firstName"
                                    className="form-control"
                                    name="firstName"
                                    value={values.firstName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="firstName">{(msg) => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">
                                    Last Name
                                </label>
                                <Field
                                    type="text"
                                    id="lastName"
                                    className="form-control"
                                    name="lastName"
                                    value={values.lastName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="lastName">{(msg) => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    name="email"
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="email">{(msg) => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Address
                                </label>
                                <Field
                                    type="text"
                                    id="address"
                                    className="form-control"
                                    name="address"
                                    value={values.address}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="address">{(msg) => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="dateOfBirth" className="form-label">
                                    Date of Birth
                                </label>
                                <Field
                                    type="text"
                                    id="dateOfBirth"
                                    className="form-control"
                                    name="dateOfBirth"
                                    value={values.dateOfBirth}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="dateOfBirth">{(msg) => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>
                            </div>
                        </div>

                        <button type='submit' disabled={isSubmitting} className="btn btn-success">{user.id ? "Update" : "Create"}</button>
                    </div>
                </Form>
            )
        }}</Formik>

    )
}


export default UserForm