import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'

import Layout from '../Layout/Layout'
import Home from '../../pages/Home/Home'
import Sorting from '../../pages/Sorting/Sorting'

function AppRoutes() {
    let routes = null

    routes = (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sorting" element={<Sorting />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )

    return routes
}

export default AppRoutes
