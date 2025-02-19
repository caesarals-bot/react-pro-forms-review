import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css'

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components Tutorial</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                                    .required('First name is required')
                                    .min(2, "Debe de tener minimo 2 caracteres" )
                                    .max(15,  'It must be fifteen characters'),
                    lastName: Yup.string()
                                    .required('Last name is required')
                                    .min(2, "Debe de tener minimo 2 caracteres" )
                                    .max(15,  'Debe de ser de quince caracteres'),
                    email: Yup.string()
                            .email('It must be a valid email')
                            .required('Email is required'),
                    terms: Yup.boolean()
                            .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                                .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                                .required("Job type is required")
                })
            }
            >
                {(formik) => (
                    <Form >
                        <label htmlFor="firstName">First Name: </label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span" />

                        <label htmlFor="lastName">Last Name: </label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span"/>

                        <label htmlFor="email">Email Address </label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="span"/>

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option value=''>Select...</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>It-Senior</option>
                            <option value='it-junior'>It-Junior</option>
                        </Field>
                        

                        <label >
                            <Field name="terms" type="checkbox" />
                            Terms and conditions </label>
                        <ErrorMessage name="terms" component="span"/>
        
                        <button type='submit'>Submit</button>
                    </Form>)
                }
                
            </Formik>

            
        </div>
    )
}
