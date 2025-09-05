import React, { useState } from 'react'
import axios from 'axios';
import { createShortUrl } from '../api/shortUrl.api.js';
import { useSelector } from 'react-redux';
import { AuthPage } from '../pages/AuthPage.jsx';
import { Link } from '@tanstack/react-router';

export const UrlForm = () => {

  const [url, setValue] = useState("")
  const [shorturl, setShortUrl] = useState()
  const [customSlug, setCustomSlug] = useState('')
  const { isAuthenticated } = useSelector((state) => state.auth)

  const handleSubmit = async () => {
    const data = customSlug.length>0 ? await createShortUrl(url,customSlug) : await createShortUrl(url) 
    if(data.shortUrl == "Url Exists"){
      alert("Short Url Already Exists")
    }
    else{
    setShortUrl(data)
  }
}


  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(shorturl?.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="space-y-4" >
        <label>Enter Your URL</label>
        <input
          type="url"
          placeholder="https://www.example.com"
          value={url}
          onChange={(event) => setValue(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full p-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Shorten URL
        </button>
        { !isAuthenticated && (
        <div className='flex justify-center'>
        <hr className="flex-grow border-t border-gray-400"/>
        <Link to="/auth"
        className='mx-4 px-4 py-2 text-blue-500'
        >
          Login
        </Link>
        <hr className="flex-grow border-t border-gray-400"/>
        </div>
        )  
      }
      </div>
      {
        isAuthenticated && (
          <div className='mt-4'>
            <label>
              Custom Slug(Optional)
            </label>
            <input
              type='text'
              id='customSlug'
              value={customSlug}
              onChange={(event) => setCustomSlug(event.target.value)}
              placeholder='Enter custom slug'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2'
            />
          </div>
        )}

      {shorturl?.shortUrl && (
        <div className="mt-4 space-y-3">
          <label className="text-gray-600">Your Short URL:</label>
          <div className="flex items-center gap-3">
            <a
              href={shorturl?.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 border border-gray-300 px-4 py-2 rounded break-all"
            >
              {shorturl?.shortUrl}
            </a>

            <button
              onClick={handleCopy}
              className="text-sm bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
