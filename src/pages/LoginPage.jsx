import React from 'react'
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiLogInCircle } from "react-icons/bi"

const LoginPage = () => {

    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
    })

    const { email, password } = formData

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = () => {
        
    }


  return (
    <>
    <div className="container auth__container">
        <h1 className="main__title">Login <BiLogInCircle /></h1>

        <form className="auth__form">
            <input type="text"
                placeholder="email"
                name="email"
                onChange={handleChange}
                value={email}
                required
            />
            <input type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
                value={password}
                required
            />
            <Link to="/reset-password">Forget Password ?</Link>

            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Login</button>
        </form>
    </div>
</>
  )
}

export default LoginPage