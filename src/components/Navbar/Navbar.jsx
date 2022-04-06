import React from 'react'
import './Navbar.css'
import { useNavigate, Link } from 'react-router-dom'

export default function Navbar() {
    let navigate = useNavigate()

    return (
        <nav className="navbar">
            <Link className="navbar-title" to="/">
                Home
            </Link>

            <Link className="navbar-title" to="/sorting">
                BubbleSort
            </Link>
        </nav>
    )
}
