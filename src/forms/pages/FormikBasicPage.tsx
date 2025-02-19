import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css'

interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
}

export const FormikBasicPage = () => {

    const validate = ({firstName, lastName, email}: FormValues) => {
        const errors: FormikErrors<FormValues> = {}

        if (!firstName) {
            errors.firstName = 'Required'
        } else if (firstName.length >= 15) {
            errors.firstName = "Must be 15 characteres or less"
        }
        if (!lastName) {
            errors.lastName = 'Required'
        } else if (lastName.length >= 15) {
            errors.lastName = "Must be 15 characteres or less"
        }
        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values, actions) => {
            console.log(values)
        },
        validate
    })

    return (
        <div>
            <h1>Formik Base Page Tutorial</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input
                    type="text"
                    id=""
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                <label htmlFor="lastName">Last Name: </label>
                <input
                    type="text"
                    id=""
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                />
                {touched.firstName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor="email">Email Address </label>
                <input
                    type="email"
                    id=""
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                />
                {touched.firstName && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
