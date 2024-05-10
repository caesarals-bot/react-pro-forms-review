import { RegisterPage } from "../forms/pages/RegisterPage";
import { HomePage } from "../initialView/pages/HomePage";

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
    }
]