import React from 'react'
import { BiUserCheck } from 'react-icons/bi'

const ActivatePage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <div className="container auth__container">
                <h1 className="main__title">Activate Account<BiUserCheck/></h1>
        
                    <button className="btn btn-accent btn-activate-account" type="submit" onClick={handleSubmit}>Activate Account</button>
            </div>
    </div>
  )
}

export default ActivatePage