import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch,useSelector } from 'react-redux'
import { logout,reset } from '../../features/auth/authSlice'
const Nav = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <nav className="navbar">
            <NavLink className="logo" to="/">Logo</NavLink>
            <ul className="nav-links">
                {user ? 
                <>
                    <NavLink className='nav-childs' to="/dashboard">Dashboard</NavLink>
                    <NavLink className='nav-childs' to="/" onClick={handleLogout}>Logout</NavLink>
                </>
                :
                <>
                    <NavLink className='nav-childs' to="/dashboard">Dashboard</NavLink>
                </>
                }
            </ul>
        </nav>
    )
}

export default Nav