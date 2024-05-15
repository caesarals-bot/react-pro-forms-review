import {  Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput} from '../components';

import '../styles/styles.css'
export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

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
                                .notOneOf(['it-junior'], 'Esta opcion no es permitida')
                                .required("Job type is required")
                })
            }
            >
                {(formik) => {
                    return (
                        <Form>
                            <MyTextInput
                                label="First Name"
                                name="firstName" />

                            <MyTextInput
                                label="Last Name"
                                name="lastName" />

                            <MyTextInput
                                label="Email Address"
                                name="email"
                                placeholder="correo@correo.com"
                                type="email" />

                            <MySelect name="jobType" label="Job Type">
                                <option value=''>Select...</option>
                                <option value='developer'>Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='it-senior'>It-Senior</option>
                                <option value='it-junior'>It-Junior</option>
                            </MySelect>

                            <MyCheckbox label={'Terms & conditions'} name={'terms'} />

                            <button type='submit'>Submit</button>
                        </Form>);
                }
                }
                
            </Formik>

            
        </div>
    )
}
