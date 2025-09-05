import React from 'react'
import { UrlForm } from '../components/UrlForm.jsx'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Shorten a long URL</h1>
        
        <UrlForm/>
        
        
      

    

        {/* {error && <p className="text-red-500 text-center mt-4">{error}</p>} */}
      </div>
    </div>
  )
}

export default HomePage