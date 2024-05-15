import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css'

export const FormikYupPage = () => {

    

    const { 
            handleSubmit, 
            errors, 
            touched,
            getFieldProps } 
            = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .required('First name is required')
                            .min(2, "Debe de tener minimo 2 caracteres" )
                            .max(15,  'It must be fifteen characters'),
            lastName: Yup.string()
                            .required('Last name is required')
                            .min(2, "Debe de tener minimo 2 caracteres" )
                            .max(15,  'Debe de ser de quince caracteres'),
            email: Yup.string().email('It must be a valid email').required('Email is required')
        })
    })

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input
                    type="text"
                    { ...getFieldProps('firstName')}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                <label htmlFor="lastName">Last Name: </label>
                <input
                    type="text"
                    { ...getFieldProps('lastName')}
                />
                {touched.firstName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor="email">Email Address </label>
                <input
                    type="email"
                    { ...getFieldProps('email')}
                />
                {touched.firstName && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
