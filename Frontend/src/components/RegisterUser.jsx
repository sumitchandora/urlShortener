import React, { useState } from 'react';
import { register } from '../api/user.api.js';
import { useNavigate } from '@tanstack/react-router';

const RegisterForm = ({state}) =>{
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    if(password.length < 6){
        setError("Password must be at least 6 characters long")
        return;
    }
    setLoading(true);
    setError('');
  

  try{
    const data = await register(name,email,password)
    navigate({to:"/dashboard"})
    setLoading(false)
  }
  catch(error){
    setLoading(false)
    setError(error.message || "Registration failed.Please try again.")
  }

};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
            </div>
        )}

        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e)=> setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded"
          autoComplete='off'
          required
        />

        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email"
          autoComplete='off'
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          required
          minLength={6}
        />

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <span onClick={()=>state(true)} className="text-blue-800">Login</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
