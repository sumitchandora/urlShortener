import React, { useState } from 'react'
import LoginForm from '../components/LoginUser.jsx'
import RegisterForm from '../components/RegisterUser.jsx'

export const AuthPage = () => {
    const [log,setLogin] = useState(true)
  
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            {log ? <LoginForm state={setLogin}/> : <RegisterForm state={setLogin}/>}
        </div>
    )
}
