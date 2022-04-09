import React, { Fragment } from 'react'
import { Route, Navigate, Routes,Outlet } from 'react-router-dom'


const GuardedRoute = ({auth}) => {
   return auth?<Outlet />:<Navigate to='/login' /> 
};


export default GuardedRoute