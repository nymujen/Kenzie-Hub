import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { TechsProvider } from "../contexts/TechsContext";

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="register" element={ <Register /> } />
            <Route path="dashboard" element={ <TechsProvider><Dashboard /></TechsProvider> } />
        </Routes> 
    )
    
}