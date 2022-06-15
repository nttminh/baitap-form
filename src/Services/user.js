import * as Yup from 'yup'
export const userSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
    dateOfBirth: Yup.string().required('Date of birth is required')
})
