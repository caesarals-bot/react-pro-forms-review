
import { HomePage } from "../initialView/pages/HomePage";
import { DynamicForm, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterPage } from "../forms/pages";


interface Route {
    to: string
    path: string
    Component: () => JSX.Element
    name: string
}

export const routes: Route[] = [
    {
        to: 'home',
        path: 'home',
        Component: HomePage,
        name: 'Home'
    },
    {
        to: '/register',
        path: 'register',
        Component: RegisterPage,
        name: 'Register'
    },
    {
        to: '/formikbasic',
        path: 'formikbasic',
        Component: FormikBasicPage,
        name: 'Formik basic'
    },
    {
        to: '/formikyup',
        path: 'formikyup',
        Component: FormikYupPage,
        name: 'Formik Yup'
    },
    {
        to: '/formik-components',
        path: 'formik-components',
        Component: FormikComponents,
        name: 'Formik Components'
    },
    {
        to: '/formik-adstraction',
        path: 'formik-adstraction',
        Component: FormikAbstraction,
        name: 'Formik Adstraction'
    },
    {
        to: '/register-formikpage',
        path: 'register-formikpage',
        Component: RegisterFormikPage,
        name: 'Register Formik Page'
    },
    {
        to: '/dynamic-form',
        path: 'dynamic-form',
        Component: DynamicForm,
        name: 'Dynamic Form'
    },
]