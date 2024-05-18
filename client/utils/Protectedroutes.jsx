import { Outlet, Navigate } from "react-router-dom";
import React from "react";


export const Protectedroutes = () => {
    const userPresent = localStorage.getItem('userAuthenticated')
    return userPresent ? <Outlet/> : <Navigate to={'/login'}/>
}