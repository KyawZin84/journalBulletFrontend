import React from 'react'
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiLogInCircle } from "react-icons/bi"

const ResetPasswordPage = () => {

    const [formData, setFormData] = useState({
        "email": "",
    })

    const { email } = formData

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
        <h1 className="main__title">Reset Password <BiLogInCircle /></h1>

        <form className="auth__form">
            <input type="text"
                placeholder="email"
                name="email"
                onChange={handleChange}
                value={email}
                required
            />

            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Reset Password</button>
        </form>
    </div>
</>
  )
}

export default ResetPasswordPage