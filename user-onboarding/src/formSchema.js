import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be 3 characters'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(3, 'Password must be 3 characters'),
    terms: yup
        .string()
        .min(3, 'Must accept terms') //not best way to do this im sure
        .required('Must accept terms'),
})

export default formSchema;