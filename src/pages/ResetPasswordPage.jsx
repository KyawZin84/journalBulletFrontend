import React from 'react'
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiLogInCircle } from "react-icons/bi"
import { toast } from 'react-toastify'
import { useDispatch,useSelector } from 'react-redux'
import { resetPassword } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const ResetPasswordPage = () => {

    const [formData, setFormData] = useState({
        "email": "",
    })

    const { email } = formData

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {isError,isSuccess,isLoading,message } = useSelector((state)=> state.auth)

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email
        }

        dispatch(resetPassword(userData))
    }

    useEffect(()=> {
        if(isError){
          toast.error(message)
        }
    
        if(isSuccess){
          navigate("/")
          toast.success("An reset password has been sent to you.")
        }
        
      },[isError,isSuccess,message,navigate,dispatch])


  return (
    <>
    <div className="container auth__container">
        <h1 className="main__title">Reset Password <BiLogInCircle /></h1>

        {isLoading && <Spinner/>}

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