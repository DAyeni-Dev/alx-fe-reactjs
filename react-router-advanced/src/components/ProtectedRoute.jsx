import React from "react"
import { Navigate } from "react-router-dom"


const isAuthenticated = true;

function ProtectedRoute ({children}) {
    return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;