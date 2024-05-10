import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"

import reactLogo from '../assets/react.svg'
import { routes } from "./routes"

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav id="navbar" className="">
                    <img src={reactLogo} alt=""/>
                    <ul>
                    {
                        routes.map(route => (
                            <li key={ route.to }>
                                <NavLink 
                                    to={route.to} 
                                    className={({isActive}) => isActive ? 'nav-active' : ''}>
                                        {route.name}
                                </NavLink>
                            </li>
                        ) ) 
                    }     
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(route => (
                            <Route 
                                path={route.path} 
                                element={<route.Component/>}
                                key={route.to} 
                            />

                        ))
                    }
                    
                    <Route path="/*" element={<Navigate to={routes[0].to} replace />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
