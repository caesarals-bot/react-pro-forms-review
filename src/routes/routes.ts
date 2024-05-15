
import { HomePage } from "../initialView/pages/HomePage";
import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from "../forms/pages";

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
]