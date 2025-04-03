import React from 'react'
import { useParams } from 'react-router-dom'

const login = () => {
    let {newUser} = useParams()
    let navigate = useNavigate();

    let handleNavigate = () => {
        navigate("/")
    }
  return (
    <div>login- {newuser} 
    <button onClick={handleNavigate}move to home ></button>
    </div>
  )
}

export default login